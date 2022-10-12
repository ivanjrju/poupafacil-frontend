import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { GrupoService } from '../services/grupo.service';

@Component({
  selector: 'app-cadastrar-grupo',
  templateUrl: './cadastrar-grupo.component.html',
  styleUrls: ['./cadastrar-grupo.component.css']
})
export class CadastrarGrupoComponent implements OnInit {


  token: any;
  participantes: string[] = [];
  isCadastroSucesso: boolean = false;
  msgCadastro: string= "teste";

  cadastroForm = new FormGroup({
    inputNomeGrupo: new FormControl(''),
    inputParticipante: new FormControl('')
  });

  constructor(private http: HttpClient, private grupoService: GrupoService) { }

  ngOnInit(): void {
    this.isCadastroSucesso= false;
    this.limparcampos();
  }

  cadastrarGrupo(){
    this.limparcampos();
    console.log(this.cadastroForm.value)
    this.token = localStorage.getItem("token")
    this.participantes.push(this.cadastroForm.value.inputParticipante)
    const body = {
      nome: this.cadastroForm.value.inputNomeGrupo,
      participantes: this.participantes
 
    }
    console.log(body)
    this.grupoService.criarGrupos(body, this.token);
    this.msgCadastro = "Grupo cadastrado com sucesso"
    this.isCadastroSucesso = true;
  }

  limparcampos(){
    this.isCadastroSucesso = false;
    this.cadastroForm.value.inputNomeGrupo = "";
  }

}
