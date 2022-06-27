import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonicPage } from './sonic.page';

const routes: Routes = [
  {
    path: '',
    component: SonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonicPageRoutingModule {}
