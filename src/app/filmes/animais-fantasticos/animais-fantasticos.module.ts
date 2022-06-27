import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimaisFantasticosPageRoutingModule } from './animais-fantasticos-routing.module';

import { AnimaisFantasticosPage } from './animais-fantasticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimaisFantasticosPageRoutingModule
  ],
  declarations: [AnimaisFantasticosPage]
})
export class AnimaisFantasticosPageModule {}
