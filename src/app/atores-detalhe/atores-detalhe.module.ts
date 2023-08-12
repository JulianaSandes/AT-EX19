import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtoresDetalhePageRoutingModule } from './atores-detalhe-routing.module';

import { AtoresDetalhePage } from './atores-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtoresDetalhePageRoutingModule
  ],
  declarations: [AtoresDetalhePage]
})
export class AtoresDetalhePageModule {}
