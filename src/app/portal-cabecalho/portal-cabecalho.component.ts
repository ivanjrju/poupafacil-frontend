import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-portal-cabecalho',
  templateUrl: './portal-cabecalho.component.html',
  styleUrls: ['./portal-cabecalho.component.css']
})
export class PortalCabecalhoComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['/login']);
  }

}
