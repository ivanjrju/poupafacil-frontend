import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { CadastrarGrupoComponent } from './cadastrar-grupo/cadastrar-grupo.component';
import { CadastrarDespesaComponent } from './cadastrar-despesa/cadastrar-despesa.component';
import { PortalCabecalhoComponent } from './portal-cabecalho/portal-cabecalho.component';
import { DespesaComponent } from './despesa/despesa.component';
import { GraficoComponent } from './grafico/grafico.component';
import { LoginComponent } from './login/login.component';
import { DespesaGrupoComponent } from './despesa-grupo/despesa-grupo.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPessoaComponent,
    CadastrarGrupoComponent,
    CadastrarDespesaComponent,
    PortalCabecalhoComponent,
    DespesaComponent,
    GraficoComponent,
    LoginComponent,
    DespesaGrupoComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
