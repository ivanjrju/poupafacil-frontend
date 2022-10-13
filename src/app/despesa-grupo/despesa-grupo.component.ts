import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrupoService } from '../services/grupo.service';
import { Despesa } from '../models/despesa.model';
import { CompiladoDespesas } from '../models/compiladoDespesas.model';
import { Grafico } from '../models/grafico.model';
import { DespesasService } from '../services/despesas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despesa-grupo',
  templateUrl: './despesa-grupo.component.html',
  styleUrls: ['./despesa-grupo.component.css']
})
export class DespesaGrupoComponent implements OnInit {

  grupos: any[]
  token: any;
  idGrupo: number;
  isExibePessoasGrupo: boolean = false;
  despesas: Despesa[] = []
  isPossuiDespesas: boolean = true;
  isExibeCadastraDespesa: boolean = true;
  periodoSelecionado: string = "";
  exibeMsg:boolean = false;
  mensagem: string = "";
  
  
  exibirEstimativas: boolean = false;
  exibirTags: boolean = false;
  exibirListaDespesas: boolean = false
  exibirCarregamento: boolean = true;

  compiladoDespesas: CompiladoDespesas[]

  formularioCadastroDespesa: boolean = true;
  graficoEstimativas: Grafico = {
    nome: "Estimativas",
    tipo: "bar",
    labels: [],
    data: [],
    legend:false
  }
  graficoTags: any = {
    nome: "Categoria",
    tipo: "doughnut",
    labels: [],
    data: []
  }

  constructor(
    private httpClient: HttpClient, 
    private grupoService: GrupoService,
    private despesasService: DespesasService,
    private router: Router, ) { }

  async ngOnInit() {
    this.token = localStorage.getItem("token")
    await this.grupoService.getGrupos(this.token).subscribe(objeto => {
      this.grupos = objeto
      if(this.grupos.length != 0){
        this.isExibePessoasGrupo = true;
        console.log(this.isExibePessoasGrupo)
      }
      console.log(this.grupos)
    },
    error =>{
      if(error.status == 403){
        alert("Sessão expirada, efetue login");
        this.router.navigate(['/login']);
        console.log("Erro ao carregar grupo: "+ error)
    }
     
    })
  }

  
  deletarDespesa(item: any){
    console.log(item.idCorrelacaoParcela)
    this.token = localStorage.getItem("token")
    this.despesasService.deleteDespesa(this.token, item.idCorrelacaoParcela).subscribe(response=>{
      console.log("deletado")
      this.exibeMsg = true;
      this.mensagem = "Despesa excluída com sucesso"
      this.despesas = [];
      if(this.periodoSelecionado != ""){
        this.buscarDespesasGrupo(this.periodoSelecionado)
      }else{
        this.buscarDespesasGrupo("MENSAL")
      }
      
    },
    error=>{
      console.log("Erro ao deletar")
    })
    console.log(item)
  }



  consultarGrupo(event: any){
    this.limparCampos();
    this.isPossuiDespesas = true;
    this.isExibeCadastraDespesa = true;
    if(event.target.value != ""){
      this.idGrupo = event.target.value;
      this.buscarDespesasGrupo("MENSAL")
    }
     
  }

  consultarDespesaPeriodo(event: any){
    this.limparCampos();
    this.buscarDespesasGrupo(event.target.value);
  }
  

  buscarDespesasGrupo(periodo:string){
    this.periodoSelecionado = periodo;
    console.log(periodo)
    this.grupoService.getGruposById(this.token,this.idGrupo, periodo).subscribe(response=>{
      this.compiladoDespesas = response
      if(this.compiladoDespesas.length > 0){
        console.log(  this.compiladoDespesas)
        this.compiladoDespesas.forEach(d => {
          d.despesas.forEach(e=>{
            this.despesas.push(e);
          })
      })
      this.exibirEstimativas = true;
      }else{
          this.isPossuiDespesas = false;
          this.isExibeCadastraDespesa = false;
      }
    },
    error=>{
      if(error.status == 403){
        alert("Sessão expirada, efetue login");
        this.router.navigate(['/login']);
        console.log("Erro ao carregar grupo: "+ error)
      }
    })
  }

  limparCampos(){
    this.despesas = [];
    this.exibeMsg = false;
    this.mensagem = ""
  }
  

}
