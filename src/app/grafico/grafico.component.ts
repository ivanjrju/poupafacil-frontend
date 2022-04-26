import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @ViewChild("meuCanvas", { static: true }) element: ElementRef = {} as ElementRef;

  @Input() infoGrafico: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

    new Chart(this.element.nativeElement, {
    type: this.infoGrafico.tipo,
      data: {
      labels: this.infoGrafico.labels,
        datasets: [{
          data: this.infoGrafico.data
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

}
