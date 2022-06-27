import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssasinoSemRastroPageRoutingModule } from './assasino-sem-rastro-routing.module';

import { AssasinoSemRastroPage } from './assasino-sem-rastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssasinoSemRastroPageRoutingModule
  ],
  declarations: [AssasinoSemRastroPage]
})
export class AssasinoSemRastroPageModule {}
