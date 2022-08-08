import { Tags } from './../models/tags.model';
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

  public createDespesa(body: any, token:string) {
    const headers = { 
      'content-type': 'application/json', 
      'Authorization': "Bearer "+ token} 
    this.httpClient.post<any>(this.baseUrl + '/api/despesas', body, {headers: headers}).subscribe(log => {
      console.log(log)
      window.location.reload();
    })
  }
  
  public getDespesasPorPessoa( token: string) {
    const headers = { 
      'content-type': 'application/json', 
      'Authorization': "Bearer "+ token} 
    return this.httpClient.get<CompiladoDespesas[]>(
      this.baseUrl + '/api/despesas/pessoa?periodo=MENSAL', {headers: headers});
  }

  public getEstimativas(token: string): Observable<Estimativas[]> {
    const headers = { 'content-type': 'application/json', 'Authorization':  "Bearer "+token} 
    console.log(headers)
    return this.httpClient.get<Estimativas[]>(this.baseUrl + '/api/despesas/pessoa/estimativas', {headers: headers});
  }

  public getTags(token: string): Observable<Tags[]> {
    const headers = { 
      'content-type': 'application/json', 
      'Authorization': "Bearer "+ token} 
    return this.httpClient.get<Tags[]>(this.baseUrl + '/api/despesas/tags/pessoa/',  {headers: headers});
  }

  public deleteDespesa(token: string, idCorrelacao: string){
    const headers = { 
      'content-type': 'application/json', 
      'Authorization': "Bearer "+ token} 
    return this.httpClient.delete(this.baseUrl + '/api/despesas/idCorrelacao/'+idCorrelacao,  {headers: headers});
  }
}
