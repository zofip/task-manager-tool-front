import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { KeycloakService, KeycloakLoadGuard } from 'common-lib';

import { environment } from 'src/environments/environment';


@Injectable()
export class AuthGuard extends KeycloakLoadGuard {

    constructor(
        protected router: Router,
        protected keycloakAngular: KeycloakService) {
        super(router, keycloakAngular);
    }

    isAccessAllowed(route: Route): Promise<boolean> {
        this.authenticated = this.keycloakAngular.isLoggedIn();
        return new Promise((resolve) => {
            if (this.authenticated) {
                return resolve(false);
            } else {
                KeycloakService.init(environment.KEYCLOAK_CONFIG)
                    .then(() => {
                        const userInfoPromise: Promise<any> = KeycloakService.loadUserInfo();
                        userInfoPromise.then((res) => {
                            KeycloakService.userInfo = res;
                            this.authenticated = true;
                            const accessible = this.validateRoles(route.data);
                            return resolve(accessible);
                        });
                    })
                    .catch((e) => {
                        this.authenticated = false;
                        return resolve(false);
                    });
            }
        });
    }


    private validateRoles(data: any): boolean {
        this.loadAuthInfo();

        if (data && data.Permission) {
           const rolesPermission = data.Permission.Only;
           if (rolesPermission.length > 0) {
               for (const rol of rolesPermission) {
                   if (this.roles.includes(rol)) {
                       return true;
                   }
               }
           }
           this.keycloakAngular.logout(data.Permission.RedirectTo);
        }
        return false;
    }
}
