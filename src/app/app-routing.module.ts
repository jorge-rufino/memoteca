import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path:'',                                //http://localhost:4200/
    redirectTo: 'listarPensamento',         //Quando for acessado a rota acima, irá redirecionar para o Mural
    pathMatch: 'full'
  },
  {
  path:'criarPensamento',                   //http://localhost:4200/criarPensamento
    component: CriarPensamentoComponent
  },
  {                                         //Mural
    path:'listarPensamento',                //http://localhost:4200/listarPensamento
    component: ListarPensamentoComponent
  },
  {                                           //Excluir Pensamento
    path:'pensamentos/excluirPensamento/:id', //http://localhost:4200/pensamentos/excluirPensamento/id
    component: ExcluirPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
