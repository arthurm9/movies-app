import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { IFilmeAPI } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeAPI; // variável não inicializada pois se não for recebido nenhum filme, a variável continua nula

  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    // o filme recebe seus dados
    this.filme = this.dadosService.getDados('filme');

    this.generos = this.dadosService.getDados('generos');
    // pega (get) os dados do filme e joga no console
    console.log('Filme enviado!', this.filme);
  }

}
