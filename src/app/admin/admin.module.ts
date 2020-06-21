import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { AdminComponent } from './pages/admin.component';
import { AdminSandbox } from './admin.sandbox';

import { AdminRoutingModule } from './admin-routing.module';
import { SpinnerModule } from '../ui/spinner/spinner';
import { TableFilterModule } from '../ui/table-filter/table-filter';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    SpinnerModule,
    AdminRoutingModule,
    TableFilterModule
  ],
  declarations: [AdminComponent],
  providers: [AdminSandbox]
})
export class AdminModule { }
