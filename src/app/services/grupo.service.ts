import { Tags } from '../models/tags.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private baseUrl = 'https://poupafacil-backend.herokuapp.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public createGrupo(body: any) {
    this.httpClient.post<any>(this.baseUrl + '/api/despesas', body).subscribe(log => {
      console.log(log)
      window.location.reload();
    })
  }
  
  public getGrupos(token: string) {
    const headers = { 
      'content-type': 'application/json', 
      'Authorization': "Bearer "+ token} 
    return this.httpClient.get<Grupo[]>(
      this.baseUrl + '/api/grupos', {headers: headers});
  } 


}
