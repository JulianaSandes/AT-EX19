import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtoresDetalhePage } from './atores-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: AtoresDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtoresDetalhePageRoutingModule {}
