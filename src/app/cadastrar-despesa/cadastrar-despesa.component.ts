import { DespesasService } from './../services/despesas.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-despesa',
  templateUrl: './cadastrar-despesa.component.html',
  styleUrls: ['./cadastrar-despesa.component.css']
})
export class CadastrarDespesaComponent implements OnInit {

  inputNomeDespesa: string
  inputIdGrupo: number
  inputValor: number
  inputParcela: number
  inputData: string

  cadastroForm = new FormGroup({
    inputNomeDespesa: new FormControl(''),
    inputIdGrupo: new FormControl(''),
    inputValor: new FormControl(''),
    inputParcela: new FormControl(''),
    inputData: new FormControl('')
  });

  grupos: any[]

  constructor(private httpClient: HttpClient, private despesasService: DespesasService) {}

  ngOnInit(): void {
    this.teste()
  }

  cadastrarDespesa() {
    
    let body

    if(this.cadastroForm.value.inputIdGrupo != "0"){
      body = {
        nomeDespesa: this.cadastroForm.value.inputNomeDespesa,
        proprietarioDespesa: 2,
        valor: this.cadastroForm.value.inputValor,
        parcela: this.cadastroForm.value.inputParcela,
        data: this.cadastroForm.value.inputData,
        idGrupo: this.cadastroForm.value.inputIdGrupo
      }
    } else {
      body = {
        nomeDespesa: this.cadastroForm.value.inputNomeDespesa,
        proprietarioDespesa: 2,
        valor: this.cadastroForm.value.inputValor,
        parcela: this.cadastroForm.value.inputParcela,
        data: this.cadastroForm.value.inputData
      }
    } 

    

    console.log("TODO: ajustar body")
    console.log(body)

    this.despesasService.createDespesa(body)

  }

  public teste() {
    this.httpClient.get<any>('https://poupafacil-backend.herokuapp.com/api/grupos/pessoa/2').subscribe(objeto => {
      this.grupos = objeto
    })
    
  }

}
