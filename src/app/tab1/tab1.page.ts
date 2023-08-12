import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { ITec } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaFilmes: ITec[] = [
    {
      nome: 'Inteligência Artificial (IA)',
      descricao: 'A Inteligência Artificial (IA) refere-se à simulação de processos de inteligência humana por sistemas computacionais. Ela capacita máquinas a aprender, raciocinar e tomar decisões, analisando dados complexos para oferecer insights valiosos e automatizar tarefas. A IA é aplicada em diversas áreas, desde diagnósticos médicos e reconhecimento de padrões até assistentes virtuais e carros autônomos.',
      lista: '1h50m',
      pagina: '/ia',
      favorito: false,
    },
    {
      nome: 'Realidade Virtual (VR) e Realidade Aumentada (AR)',
      descricao: 'A Realidade Virtual (VR) cria ambientes completamente imersivos e simulados por meio de dispositivos como óculos, permitindo experiências imersivas em mundos virtuais. Já a Realidade Aumentada (AR) sobrepor elementos virtuais ao ambiente real através de dispositivos como smartphones, enriquecendo interações com informações digitais contextuais. Ambas as tecnologias têm aplicações variadas, desde entretenimento e jogos até treinamento profissional e educação.',
      lista: '3h01m',
      pagina: '/vrar',
      favorito: false,
    },
    {
      nome: 'Machine Learning',
      descricao: 'Machine Learning (Aprendizado de Máquina) é um ramo da Inteligência Artificial que permite que sistemas computacionais aprendam e melhorem a partir de experiências passadas sem serem explicitamente programados. Por meio de algoritmos e análise de dados, o Machine Learning capacita máquinas a reconhecer padrões, fazer previsões e tomar decisões inteligentes, impulsionando avanços em áreas como reconhecimento de imagem, processamento de linguagem natural e análise de dados complexos.',
      lista: '2h 20m',
      pagina: '/ml',
      favorito: false,
    },
    {
      nome: 'Computação na nuvem',
      descricao: 'Computação na nuvem é um modelo de fornecimento de recursos de TI, como armazenamento, processamento e serviços, pela internet. Isso permite que empresas e indivíduos acessem e utilizem esses recursos de forma flexível, escalável e sob demanda, eliminando a necessidade de infraestrutura física local. A computação na nuvem é essencial para reduzir custos, aumentar a eficiência e suportar uma ampla gama de aplicativos e serviços online.',
      lista: '1h 32m',
      pagina: '/nuvem',
      favorito: false,
    },
    {
      nome: 'Rede 5g',
      descricao: 'A nova rede 5G permitirá a interconexão de equipamentos e dispositivos e possibilitando o acesso a produtos inovadores e utilidades domésticas, desenvolvendo a chamada Internet das Coisas (IoT). Essa tecnologia permitirá a interconexão de diversos outros equipamentos em casa ou no escritório.',
      lista: '1h 32m',
      pagina: '/5g',
      favorito: false,
    },
  ];
  exibirFilme(filme: ITec) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: filme } };
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: ITec) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a tecnologia?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          },
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          },
        },
      ],
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Tecnologia adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();
  }
}
