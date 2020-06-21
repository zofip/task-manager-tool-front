import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { UrlsEnum } from 'src/app/core/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  goHome() {
    this.router.navigate([UrlsEnum.Home]);
  }

  login() {
    this.authService.login(this.loginFormGroup.getRawValue())
      .subscribe(response => {
        if (response.token) {
          this.authService.userLogedIn(response.token);
          this.goHome();
        } else {
          console.log('Usuario o contraseña invalidos')
        }

      });;
  }

}
