import { NgModule, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@Component({
  selector: 'app-msg-dialog',
  templateUrl: './msg-dialog.html'
})
export class MsgDialogComponent {

  private param: any;
  selectClose: boolean;

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.param = {value: this.data.param };
    }

  close() {
    this.selectClose = true;
  }

}

@NgModule({
  imports: [
    CommonModule,
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
