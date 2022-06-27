import { IFilme } from './../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilme; // variável não inicializada pois se não for recebido nenhum filme, a variável continua nula

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    // o filme recebe seus dados
    this.filme = this.dadosService.getDados('filme');
    // pega (get) os dados do filme e joga no console
    console.log('Filme enviado!', this.filme);
  }

}
