import { Tags } from '../models/tags.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'https://poupafacil-backend.herokuapp.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  public getLogin(email: string, senha: string ){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  }
}
