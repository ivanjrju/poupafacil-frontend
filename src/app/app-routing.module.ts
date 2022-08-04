import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarGrupoComponent } from './cadastrar-grupo/cadastrar-grupo.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { DespesaComponent } from './despesa/despesa.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DespesaComponent },
  { path: 'grupo', component: CadastrarGrupoComponent },
  { path: 'pessoa', component: CadastrarPessoaComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
