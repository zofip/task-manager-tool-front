import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { KeycloakService } from 'common-lib';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(public auth: KeycloakService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (KeycloakService.auth.authz) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${KeycloakService.auth.authz.token}`
        }
      });
    }
    return next.handle(request);
  }
}
