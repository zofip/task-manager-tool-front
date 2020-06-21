import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '../auth.service';
import { UrlsEnum, Role } from '../../enums';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                const uri = currentUser.role !== Role.Admin ? UrlsEnum.Home : UrlsEnum.Home + '/' + currentUser.role;
                this.router.navigate([uri]);
                return false;
            }
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}