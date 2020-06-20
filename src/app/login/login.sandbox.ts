import { Injectable } from '@angular/core';

import { AuthService } from '../core/services/auth.service';

@Injectable()
export class LoginSandbox {

  constructor(private authService: AuthService) {  }

  public login(data) {
    this.authService.login(data).subscribe(token => {
      console.log(token);
    });
  }

}
