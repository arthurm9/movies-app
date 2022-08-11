import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { IFilmeAPI } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeAPI;

  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.getDados('filme');

    this.generos = this.dadosService.getDados('generos');

    console.log('Filme enviado!', this.filme);
  }

}
