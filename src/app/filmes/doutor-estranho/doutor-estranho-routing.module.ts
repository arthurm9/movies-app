import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoutorEstranhoPage } from './doutor-estranho.page';

const routes: Routes = [
  {
    path: '',
    component: DoutorEstranhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoutorEstranhoPageRoutingModule {}
