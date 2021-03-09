import { Component, NgModule, Input, TemplateRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';

import { User } from '../../core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.html',
  styleUrls: ['./navbar-login.scss']
})
export class NavBarLoginComponent {

  @Input() user: User;
  @Input() project: string;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() linkChangePassword: string;
  @Output() clickProject: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router,
    private authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  emitClick() {
    this.clickProject.emit(true);
  }

}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [NavBarLoginComponent],
  declarations: [NavBarLoginComponent],
})
export class NavBarLoginModule { }
