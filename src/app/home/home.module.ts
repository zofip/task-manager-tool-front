import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavBarLoginModule } from '../ui/navbar-login/navbar-login';
import { AdminModule } from '../admin/admin.module';

import { HomeComponent } from './pages/home.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarLoginModule,
    AdminModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
