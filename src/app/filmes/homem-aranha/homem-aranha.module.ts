import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemAranhaPageRoutingModule } from './homem-aranha-routing.module';

import { HomemAranhaPage } from './homem-aranha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemAranhaPageRoutingModule
  ],
  declarations: [HomemAranhaPage]
})
export class HomemAranhaPageModule {}
