import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';

import { SpinnerModule } from '../ui/spinner/spinner';

import { LoginSandbox } from './login.sandbox';
import { LoginComponent } from './pages/login.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SpinnerModule
  ],
  providers: [LoginSandbox],
  declarations: [LoginComponent]
})
export class LoginModule { }
