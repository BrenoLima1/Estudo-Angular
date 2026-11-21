import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { Produtos } from './components/produtos/produtos';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'sobre',
    component: Sobre,
  },
  {
    path: 'produtos/:id',
    component: ProdutoDetalhe,
  },
  {
    path: 'produtos',
    component: Produtos,
  },
  {
    path: 'tarefas',
    component: ListaTarefas,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
