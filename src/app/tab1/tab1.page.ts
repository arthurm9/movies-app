import { IFilme } from '../models/IFilme.model'; // importa o model criado para a interface de filmes
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DadosService } from '../services/dados.service';
import { FilmeService } from '../services/filme.service';
import { IFilmeAPI, IListaFilmes } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  // array dos filmes
  listaVideos: IFilme[] = [
    { // Doutor Estranho
      nome: 'Doutor Estranho no Multiverso da Loucura (2022)',
      dataLancamento: '05/05/2022',
      duracao: '2h 6m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      pagina: '/doutor-estranho'
    },
    { // Animais Fantásticos
      nome: 'Animais Fantásticos: Os Segredos de Dumbledore (2022)',
      dataLancamento: '14/04/2022',
      duracao: '2h 22m',
      classificacao: 68,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      pagina: '/animais-fantasticos'
    },
    { // Sonic
      nome: 'Sonic 2: O Filme (2022)',
      dataLancamento: '07/04/2022',
      duracao: '2h 2m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg',
      generos: ['Ação', 'Aventura', 'Família', 'Comédia', 'Ficção científica'],
      pagina: '/sonic'
    },
    { // Assasino sem Rastro
      nome: 'Assassino Sem Rastro (2022)',
      dataLancamento: '09/06/2022',
      duracao: '1h 54m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/emj0dVlz5zSnvOfMZJA2zrWyW6Z.jpg',
      generos: ['Ação', 'Thriller', 'Crime'],
      pagina: '/assasino-sem-rastro'
    },
    { // Homem-Aranha
      nome: 'Homem-Aranha: Sem Volta Para Casa (2021)',
      dataLancamento: '16/12/2021',
      duracao: '2h 29m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/homem-aranha'
    },
  ];

  listaFilmes: IListaFilmes;

  constructor(public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router,
    public filmeService: FilmeService
    ) { }

  buscarFilmes (evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      })
    }
  }

  exibirFilme(filme: IFilmeAPI){
    // armazena o filme no serviço de dados
    this.dadosService.setDados('filme', filme);
    // chama a página com os dados do filme armazenado
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja Favoritar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // não mexer
          handler: (blah) => { // o que vai ser acionado quando o botão for pressionado
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            // console.log('Confirm Okay');
            this.exibirToast(); // acionará o método para exibir o toast abaixo
          }
        }
      ]
    });

    await alert.present();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success' // cor adicionada
    });
    toast.present();
  }

}
