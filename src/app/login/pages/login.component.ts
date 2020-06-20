import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { LoginSandbox } from '../login.sandbox';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public loginSandbox: LoginSandbox) {
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  goHome() {
    // this.router.navigate([UrlsEnum.Home]);
  }

  login() {
    this.loginSandbox.login(this.loginFormGroup.getRawValue());
  }

}
