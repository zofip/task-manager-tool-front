import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';

import { AdminComponent } from './pages/admin.component';
import { AdminSandbox } from './admin.sandbox';
import { SpinnerModule } from '../ui/spinner/spinner';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    SpinnerModule
  ],
  declarations: [AdminComponent],
  providers: [AdminSandbox]
})
export class AdminModule { }
