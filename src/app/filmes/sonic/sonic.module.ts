import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonicPageRoutingModule } from './sonic-routing.module';

import { SonicPage } from './sonic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonicPageRoutingModule
  ],
  declarations: [SonicPage]
})
export class SonicPageModule {}
