import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrupoService } from '../services/grupo.service';

@Component({
  selector: 'app-despesa-grupo',
  templateUrl: './despesa-grupo.component.html',
  styleUrls: ['./despesa-grupo.component.css']
})
export class DespesaGrupoComponent implements OnInit {

  grupos: any[]
  token: any;

  constructor(private httpClient: HttpClient, private grupoService: GrupoService) { }

  async ngOnInit() {
   
    this.token = localStorage.getItem("token")
    await this.grupoService.getGrupos(this.token).subscribe(objeto => {
      this.grupos = objeto}
    )
  }

}
