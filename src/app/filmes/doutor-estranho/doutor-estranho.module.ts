import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoutorEstranhoPageRoutingModule } from './doutor-estranho-routing.module';

import { DoutorEstranhoPage } from './doutor-estranho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoutorEstranhoPageRoutingModule
  ],
  declarations: [DoutorEstranhoPage]
})
export class DoutorEstranhoPageModule {}
