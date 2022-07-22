import { Tags } from './../models/tags.model';
import { Despesa } from './../models/despesa.model';
import { CompiladoDespesas } from './../models/compiladoDespesas.model';
import { Estimativas } from '../models/estimativas.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grafico } from '../models/grafico.model';
import { DespesasService } from '../services/despesas.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  despesas: Despesa[] = []

  exibirEstimativas: boolean = false;
  exibirTags: boolean = false;
  exibirListaDespesas: boolean = false

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


  constructor(private http: HttpClient, private despesasService: DespesasService) { }

  async ngOnInit() {

    await this.despesasService.getDespesasPorPessoa('2').subscribe(obj => {

      let estimativasLabels: string[] = []
      let estimativasData: string[] = []

      this.compiladoDespesas = obj
      this.compiladoDespesas[0].despesas.forEach(d => {
        this.despesas.push(d)
      })
    })

    await this.despesasService.getEstimativas('2').subscribe(objeto => {

      let estimativas: Estimativas[] = objeto
      let estimativasLabels: string[] = []
      let estimativasData: string[] = [];

      estimativas.forEach(estimativa => {
        estimativasLabels.push(formatarDataExtenso(estimativa.data))
        estimativasData.push(estimativa.totalDespesasMes + '')
      })

      this.graficoEstimativas.labels = estimativasLabels
      this.graficoEstimativas.data = estimativasData
      this.graficoEstimativas.legend = false

      this.exibirEstimativas = true

    })

    await this.despesasService.getTags('2').subscribe(objeto => {

      let tags: Tags[] = objeto
      let estimativasLabels: string[] = []
      let estimativasData: string[] = [];

      tags.forEach(tag => {
        estimativasLabels.push(tag.tag)
        estimativasData.push(tag.total+'')
      })

      this.graficoTags.labels = estimativasLabels
      this.graficoTags.data = estimativasData

      this.exibirTags = true
    })

  }

  
}

function formatarDataExtenso(periodo: string) {
  var data = new Date();
  let periodoAno = periodo.substring(0,4);
  let periodoMes = periodo.substring(5,7)
  console.log(periodoMes)
  console.log(periodoAno)
  
  data.setFullYear(parseInt(periodoAno));
  data.setMonth(parseInt(periodoMes));
  // Meses possíveis
  var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  var mes = data.getMonth();

  // Resultado
  var extenso =  meses[mes] + ' - ' + periodoAno;
  return extenso;

}
