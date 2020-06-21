import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AdminSandbox } from '../admin.sandbox';

import {
  TabAdminEnum, TitleDialogEnum, IconsEnum, ColorsEnum,
  MessagesEnum, MsgDialogEnum, ErrorStatusEnum
} from 'src/app/core/enums';
import { FormProjectComponent } from '../components/form-project.component';
import { MsgDialogComponent } from 'src/app/ui/msg-dialog/msg-dialog';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  @ViewChild(FormProjectComponent) formProjectComponent: FormProjectComponent;
  selectTab: string;
  tabAdminEnum = TabAdminEnum;

  columnsSource: any = [
    { filterColumn: 'code', nameColumn: 'Code' },
    { filterColumn: 'name', nameColumn: 'Name' }
  ];

  constructor(
    private router: Router,
    public adminSandbox: AdminSandbox,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.adminSandbox.getProjects();
  }

  select(value: string) {
    this.selectTab = value;
  }

  save() {
    const dataFormProject = this.formProjectComponent.formProjectGroup.getRawValue();
    this.adminSandbox.post(dataFormProject).subscribe(response => {
      if (ErrorStatusEnum.OK === response.status) {
        this.dialog.open(MsgDialogComponent, {
          data: {
            title: TitleDialogEnum.Info,
            icon: IconsEnum.Info,
            color: ColorsEnum.Info,
            typeMessage: MsgDialogEnum.Info,
            message: MessagesEnum.savedSuccessfully
          }
        });
      } else {
        this.dialog.open(MsgDialogComponent, {
          data: {
            title: TitleDialogEnum.Error,
            icon: IconsEnum.Error,
            color: ColorsEnum.Error,
            typeMessage: MsgDialogEnum.Error,
            message: MessagesEnum.serviceError
          }
        });
      }
    });
  }

}
