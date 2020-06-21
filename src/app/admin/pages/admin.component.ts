import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminSandbox } from '../admin.sandbox';

import { TabAdminEnum } from 'src/app/core/enums';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  selectTab: string;
  tabAdminEnum = TabAdminEnum;

  columnsSource: any = [
    { filterColumn: 'code', nameColumn: 'Code' },
    { filterColumn: 'name', nameColumn: 'Name' }
  ];

  constructor(
    private router: Router,
    public adminSandbox: AdminSandbox) {
  }

  ngOnInit() {
    this.adminSandbox.getProjects();
  }


  select(value: string) {
    this.selectTab = value;
  }

}
