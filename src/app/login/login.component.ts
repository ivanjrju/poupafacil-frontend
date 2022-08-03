import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  inputEmail: string;
  inputSenha: string;

  loginForm = new FormGroup({
    inputSenha: new FormControl('', Validators.required),
    inputEmail: new FormControl(''),
  });

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  efetuarLogin(){
    
    //Consultar login
    let token = "1234";
    localStorage.setItem("token", token);

    this.router.navigate(['/dash']);
  }
  

}
