import { Grafico } from './../models/grafico.model';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @ViewChild("meuCanvas", { static: true }) element: ElementRef = {} as ElementRef;

  @Input() infoGrafico: Grafico;

  coresRandom: string[] = []

  constructor() {
    Chart.register(...registerables);
  }

  
  ngOnInit(): void {
  
    this.gerarCor()

    new Chart(this.element.nativeElement, {
      type: this.infoGrafico.tipo,
      data: {
        labels: this.infoGrafico.labels,
        datasets: [{
          data: this.infoGrafico.data,
          backgroundColor: this.coresRandom
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: this.infoGrafico.nome
          }
        }
      }
    });

  }

  gerarCor(){
    
    this.infoGrafico.data.forEach(element => {
      this.coresRandom.push('rgba(255, '+(Math.floor(Math.random() * (200 - 150) ) + 150)+', 230, 1)')
    });
  }
}
