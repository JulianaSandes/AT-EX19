import { SerieDetalhePage } from './../serie-detalhe/serie-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Wandinha',
      lancamento: '23 de novembro de 2022',
      temporadas: '2 temporadas',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg',
      generos: ['Mistério', 'Suspense'],
      pagina: '/wandinha',
      favorito: false
    },
    {
      nome: 'The Good Doctor',
      lancamento: '25 de setembro de 2017',
      temporadas: '5 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/v9WYk0nigzR9NAEjeSmfI6s4XA2.jpg',
      generos: ['Ficção Científica', 'Ação'],
      pagina: '/tgd',
      favorito: false
    },
    {
      nome: 'Origem',
      lancamento: '20 de fevereiro de 2022',
      temporadas: '2 temporadas',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/kYf47t1tcSmhH714NTvSS8udIC9.jpg',
      generos: ['Drama', 'Ação'],
      pagina: '/origem',
      favorito: false
    }
  ];
  exibirSerie(serie: ISerie) {
    const navigationExtras: NavigationExtras = { state: { paramSerie: serie } };
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          },
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          },
        },
      ],
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();
  }

}
