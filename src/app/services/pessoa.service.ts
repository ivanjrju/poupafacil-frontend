import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = 'https://poupafacil-backend.herokuapp.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public createpessoa(body: any) {
    this.httpClient.post<any>(this.baseUrl + '/api/despesas', body).subscribe(log => {
      console.log(log)
      window.location.reload();
    })
  }
  
  public getPessoa(token: string) {
    const headers = { 
      'content-type': 'application/json', 
      'Authorization': "Bearer "+ token} 
    return this.httpClient.get(
      this.baseUrl + '/api/pessoas/', {headers: headers});
  } 


}
