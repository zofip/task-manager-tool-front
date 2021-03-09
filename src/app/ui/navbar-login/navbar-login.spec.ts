import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavBarLoginComponent } from './navbar-login';
import { RouterModule } from '@angular/router';
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';


describe('NavbarComponent', () => {
  let component: NavBarLoginComponent;
  let fixture: ComponentFixture<NavBarLoginComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLoginComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
