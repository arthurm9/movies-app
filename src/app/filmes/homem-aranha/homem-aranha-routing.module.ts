import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemAranhaPage } from './homem-aranha.page';

const routes: Routes = [
  {
    path: '',
    component: HomemAranhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemAranhaPageRoutingModule {}
