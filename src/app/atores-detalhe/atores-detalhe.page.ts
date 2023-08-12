import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/dot-notation */
import { IAtores } from './../model/IAtores';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atores-detalhe',
  templateUrl: './atores-detalhe.page.html',
  styleUrls: ['./atores-detalhe.page.scss'],
})
export class AtoresDetalhePage implements OnInit {
  atores: any;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.atores = getNav.extras.state['paramAtores'];
      }
    });
  }
}
