import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  token: any;
  pessoa: any;
  exibirAlteracao: boolean = false;

  constructor(
    private pessoaService: PessoaService
  ) { }

  async ngOnInit() {

    this.token = localStorage.getItem("token")
    await this.pessoaService.getPessoa(this.token).subscribe(response =>{
      console.log(response)
      this.pessoa = response;
      console.log(this.pessoa)
    },
    error =>{
      console.log("Erro ao carregar pessoas : "+ error["message"])
    })

  }

}
