import { DadosService } from './services/dados.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  // sempre que um app é iniciado, ele carrega os providers, consequentemente os 'DadosService'
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  DadosService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
