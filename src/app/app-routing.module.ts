import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filme-detalhe',
    loadChildren: () => import('./filme-detalhe/filme-detalhe.module').then( m => m.FilmeDetalhePageModule)
  },
  {
    path: 'serie-detalhe',
    loadChildren: () => import('./serie-detalhe/serie-detalhe.module').then( m => m.SerieDetalhePageModule)
  },
  {
    path: 'atores-detalhe',
    loadChildren: () => import('./atores-detalhe/atores-detalhe.module').then( m => m.AtoresDetalhePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
