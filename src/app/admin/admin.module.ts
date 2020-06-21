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
import { FormProjectComponent } from './components/form-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MsgDialogModule } from '../ui/msg-dialog/msg-dialog';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SpinnerModule,
    AdminRoutingModule,
    TableFilterModule,
    MsgDialogModule
  ],
  declarations: [
    AdminComponent,
    FormProjectComponent],
  providers: [AdminSandbox]
})
export class AdminModule { }
