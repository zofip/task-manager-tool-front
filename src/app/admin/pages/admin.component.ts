import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminSandbox } from '../admin.sandbox';

import { TabAdminEnum } from 'src/app/core/enums';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  selectTab: string;
  tabAdminEnum = TabAdminEnum;

  constructor(
    private router: Router,
    public adminSandbox: AdminSandbox) {
  }

  select(value: string) {
    this.selectTab = value;
  }

}
