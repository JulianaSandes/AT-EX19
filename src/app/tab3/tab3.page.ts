import { AtoresDetalhePage } from './../atores-detalhe/atores-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Will Smith',
      DataNascimento: '25 de setembro de 1968',
      serieParticipa: 'Um maluco no pedaço',
      classificacao: 10,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CueO0yQhj-z5ZFw-1DwDqhi9KAzeNqfa0XB7WjAXvQ&s',
      pagina: '/alexis',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      favorito: false,
    },
    {
      nome: 'Leonardo DiCaprio',
      DataNascimento: '11 de novembro de 1974',
      serieParticipa: 'Titanic',
      classificacao: 6,
      foto: 'https://akns-images.eonline.com/eol_images/Entire_Site/202152/rs_1200x1200-210602142411-1200-leonardo-dicaprio.cm.6221.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top',
      pagina: '/leornado',
      generos: ['Ação', 'Romance', 'Aventura'],
      favorito: false,
    },
    {
      nome: 'Jenna Ortega',
      DataNascimento: '27 de setembro de 2002',
      serieParticipa: 'A irmã do meio',
      classificacao: 4,
      foto: 'data:image/jpeg;base64,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',
      pagina: '/ortega',
      generos: ['Ação', 'Fantasia', 'Suspense'],
      favorito: false,
    },
  ];
  exibirAtores(atores: IAtores) {
    const navigationExtras: NavigationExtras = {
      state: { paramAtores: atores },
    };
    this.router.navigate(['atores-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(atores: IAtores) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            atores.favorito = false;
          },
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            atores.favorito = true;
            this.apresentarToast();
          },
        },
      ],
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();
  }
}
