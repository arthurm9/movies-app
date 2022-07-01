import { DadosService } from './services/dados.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importação http para url de busca de filmes
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  // sempre que um app é iniciado, ele carrega os providers, consequentemente os 'DadosService'
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  DadosService, { provide: LOCALE_ID, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
