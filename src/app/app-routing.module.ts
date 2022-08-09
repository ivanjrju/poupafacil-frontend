import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaGrupoComponent } from './despesa-grupo/despesa-grupo.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { DespesaComponent } from './despesa/despesa.component';
import { LoginComponent } from './login/login.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DespesaComponent },
  { path: 'grupo', component: DespesaGrupoComponent },
  { path: 'pessoa', component: CadastrarPessoaComponent },
  { path: 'perfil', component: PessoaComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
