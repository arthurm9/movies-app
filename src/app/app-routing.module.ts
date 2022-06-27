import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'doutor-estranho',
    loadChildren: () => import('./filmes/doutor-estranho/doutor-estranho.module').then( m => m.DoutorEstranhoPageModule)
  },
  {
    path: 'animais-fantasticos',
    loadChildren: () => import('./filmes/animais-fantasticos/animais-fantasticos.module').then( m => m.AnimaisFantasticosPageModule)
  },
  {
    path: 'sonic',
    loadChildren: () => import('./filmes/sonic/sonic.module').then( m => m.SonicPageModule)
  },
  {
    path: 'assasino-sem-rastro',
    loadChildren: () => import('./filmes/assasino-sem-rastro/assasino-sem-rastro.module').then( m => m.AssasinoSemRastroPageModule)
  },
  {
    path: 'homem-aranha',
    loadChildren: () => import('./filmes/homem-aranha/homem-aranha.module').then( m => m.HomemAranhaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
