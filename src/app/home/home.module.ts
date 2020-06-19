import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavBarLoginModule } from '../ui/navbar-login/navbar-login';

import { HomeSandbox } from './home.sandbox';
import { HomeComponent } from './pages/home.component';




@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarLoginModule
  ],
  providers: [HomeSandbox],
  declarations: [HomeComponent]
})
export class HomeModule { }
