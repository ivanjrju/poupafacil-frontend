import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-grupo',
  templateUrl: './cadastrar-grupo.component.html',
  styleUrls: ['./cadastrar-grupo.component.css']
})
export class CadastrarGrupoComponent implements OnInit {

  inputNome: string = "";
  inputIdPessoa: string = "";
  idPessoa: any = "";
  inputIdPessoas: any[] = [];
  token: any;

  cadastroForm = new FormGroup({
    inputNome: new FormControl(''),
    inputIdPessoas: new FormControl(this.inputIdPessoas),
    inputIdPessoa: new FormControl('')
  });


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
  }

  adicionarPessoa(){
    console.log(this.inputIdPessoa)
    this.inputIdPessoas.push(this.inputIdPessoa);
    this.inputIdPessoa = "";
  }

  removerPessoa(index: number){
    this.inputIdPessoas.splice(index, 1);
  }

  teste(){
    console.log(this.cadastroForm.value)
    this.token = localStorage.getItem("token")
    const body = {
      nome: this.cadastroForm.value.inputNome,
      participantes: this.cadastroForm.value.inputIdPessoas
    }

    this.http.post<any>('https://poupafacil-backend.herokuapp.com/api/grupos', body)
      .subscribe(data => {
        alert("Cadastrado com sucesso")
        console.log(data)
      });
  }

}
