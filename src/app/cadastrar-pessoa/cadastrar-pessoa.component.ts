import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  inputNome: string = "";
  inputEmail: string = "";
  inputRenda: string = "";

  cadastroForm = new FormGroup({
    inputNome: new FormControl(''),
    inputEmail: new FormControl(''),
    inputRenda: new FormControl('')
  });

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  teste() {
    console.log(this.cadastroForm.value)

    const body = {
      nome: this.cadastroForm.value.inputNome,
      email: this.cadastroForm.value.inputEmail,
      renda: this.cadastroForm.value.inputRenda
    }

    this.http.post<any>('https://poupafacil-backend.herokuapp.com/api/pessoas', body)
      .subscribe(data => {
        alert("Cadastrado com sucesso")
      });

  }


}
