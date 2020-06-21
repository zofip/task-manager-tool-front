import { Component, NgModule, Input, TemplateRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';

import { User } from '../../core/models/user.model';


@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.html',
  styleUrls: ['./navbar-login.scss']
})
export class NavBarLoginComponent {

  @Input() personLogged: User;
  @Input() project: string;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() linkChangePassword: string;
  @Output() clickProject: EventEmitter<boolean> = new EventEmitter();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver) { }

  // isAuthenticated(): boolean {
  //   if (this.keycloakService) {
  //     return this.keycloakService.isLoggedIn();
  //   } else {
  //     return false;
  //   }
  // }

  logout() {
    // this.keycloakService.logout();
  }

  emitClick() {
    this.clickProject.emit(true);
  }

}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // TranslateModule.forRoot(),
    // BrowserAnimationsModule,
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
