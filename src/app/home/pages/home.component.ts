import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HomeSandbox } from '../home.sandbox';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(
    private router: Router,
    public homeSandbox: HomeSandbox) {
  }

  goHome() {
    // this.router.navigate([UrlsEnum.Home]);
  }

}
