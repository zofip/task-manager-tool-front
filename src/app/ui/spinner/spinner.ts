import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.html'
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent]
})
export class SpinnerModule { }
