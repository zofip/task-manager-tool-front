import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import { KeycloakService } from 'common-lib';

// import { PersonaService } from '../core/services/persona.service';

import { User } from '../core/models/user.model';


@Injectable()
export class HomeSandbox {

  public personLogged$: Observable<User>;

  // constructor(private personaService: PersonaService) {
  //   this.personLogged$ = this.personaService.getDetail(KeycloakService.userInfo.preferred_username);
  // }

}
