import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssasinoSemRastroPage } from './assasino-sem-rastro.page';

const routes: Routes = [
  {
    path: '',
    component: AssasinoSemRastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssasinoSemRastroPageRoutingModule {}
