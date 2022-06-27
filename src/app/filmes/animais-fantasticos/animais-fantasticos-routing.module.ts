import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimaisFantasticosPage } from './animais-fantasticos.page';

const routes: Routes = [
  {
    path: '',
    component: AnimaisFantasticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisFantasticosPageRoutingModule {}
