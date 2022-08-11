import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any
  inputEmail: string;
  inputSenha: string;
  isExibirCadastro: boolean = false;
  isCadastroSucesso: boolean = false;
  msgCadastro: string= "teste";

  loginForm = new FormGroup({
    inputSenha: new FormControl('', Validators.required),
    inputEmail: new FormControl(''),
  });

  pessoaForm = new FormGroup({
    inputSenhaCadastro: new FormControl('', Validators.required),
    inputEmailCadastro: new FormControl(''),
    inputRendaCadastro: new FormControl(''),
    inputNomeCadastro: new FormControl('')
  });

  constructor( 
      private router: Router, 
      private loginService: LoginService, 
      private httpClient: HttpClient,
      private pessoaService: PessoaService ) { }

  ngOnInit(): void {
  }

  habilitarCadastro(){
    this.isExibirCadastro = true;
  }

  cadastrarPessoa(){
    console.log("Efetuar cadastro");
    let body
    body = {
      nome: this.pessoaForm.value.inputNomeCadastro,
      email: this.pessoaForm.value.inputEmailCadastro,
      senha: this.pessoaForm.value.inputSenhaCadastro,
      renda:  this.pessoaForm.value.inputRendaCadastro
    }

    this.pessoaService.createpessoa(body).subscribe(  
        response =>{
          console.log("Cadastro efetuado com sucesso");
          this.isCadastroSucesso = true;
          this.msgCadastro = "Cadastrado efetuado com sucesso. Efetue o login!";
          this.isExibirCadastro = false;
        },
        error =>{
          this.msgCadastro = "Ocorreu um erro ao cadastrar, tente novamente";
        });
  }

  efetuarLogin(){
    //Consultar login
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify({email: this.loginForm.value.inputEmail, senha:  this.loginForm.value.inputSenha});

    this.httpClient.post(
        "https://poupafacil-backend.herokuapp.com" + '/login', 
        body,{'headers':headers})
      .subscribe(
          response=>{
            try {      
              this.token = response  
              localStorage.setItem("token", this.token["token"]);
              console.log("Sucesso ao efetuar login")
              this.router.navigate(['/dash']);
            } catch(error) {
              console.log('Erro ao efetuar login')
              console.error(error)
             
            }   
          },
          error =>{
            console.log('Erro ao efetuar login', error["message"])
            alert("Tente novamente. Erro ao efetuar login")
            error.status
          } 
          
        )
  }
  

}
