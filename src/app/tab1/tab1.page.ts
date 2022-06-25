import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja Favoritar este filme?',
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
