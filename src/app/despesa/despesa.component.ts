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
    data: []
  }
  graficoTags: any = {
    nome: "Tags",
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
        estimativasLabels.push(estimativa.data)
        estimativasData.push(estimativa.totalDespesasMes + '')
      })

      this.graficoEstimativas.labels = estimativasLabels
      this.graficoEstimativas.data = estimativasData

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
