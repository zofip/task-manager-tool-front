import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from 'src/app/core/services/auth.service';
import { UrlsEnum, TitleDialogEnum, IconsEnum, ColorsEnum, MsgDialogEnum, MessagesEnum, Role } from 'src/app/core/enums';
import { MsgDialogComponent } from 'src/app/ui/msg-dialog/msg-dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.authService.login(this.loginFormGroup.getRawValue())
      .subscribe(response => {
        if (response.token) {
          this.authService.saveUserDetails(response.token);
          const role = this.authService.currentUserValue.role;
          const uri = role !== Role.Admin ? UrlsEnum.Home : UrlsEnum.Home + '/' + role;
          this.router.navigate([uri]);
        } else {
          this.dialog.open(MsgDialogComponent, {
            data: {
              title: TitleDialogEnum.Warn,
              icon: IconsEnum.Info,
              color: ColorsEnum.Warn,
              typeMessage: MsgDialogEnum.Warn,
              message: MessagesEnum.InvalidUsernameAndPassword
            }
          });
        }
      });
  }

}
