import { CompiladoDespesas } from '../models/compiladoDespesas.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estimativas } from '../models/estimativas.model'

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  private baseUrl = 'https://poupafacil-backend.herokuapp.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public createDespesa(body: any) {
    this.httpClient.post<any>(this.baseUrl + '/api/despesas', body).subscribe(log => {
      console.log(log)
      window.location.reload();
    })
  }
  
  public getDespesasPorPessoa(id: string) {
    return this.httpClient.get<CompiladoDespesas[]>(this.baseUrl + '/api/despesas/pessoa/2?periodo=MENSAL');
  }

  public getEstimativas(id: string): Observable<Estimativas[]> {
    return this.httpClient.get<Estimativas[]>(this.baseUrl + '/api/despesas/pessoa/2/estimativas');
  }
  

}
