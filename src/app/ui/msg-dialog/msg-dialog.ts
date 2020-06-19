import { NgModule, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UrlsEnum } from 'src/app/core/enums/enums';


@Component({
  selector: 'app-msg-dialog',
  templateUrl: './msg-dialog.html'
})
export class MsgDialogComponent {

  private param: any;
  selectClose: boolean;

  constructor(
    private translate: TranslateService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.param = {value: this.data.param };
    }

  goOut() {
    this.router.navigate([UrlsEnum.Home]);
  }

  close() {
    this.selectClose = true;
  }

}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  entryComponents: [MsgDialogComponent],
  declarations: [MsgDialogComponent]
})
export class MsgDialogModule { }
