import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HandleError, HttpErrorHandler } from './http/http-error-handler.service';
import { BACKEND_URL, ApiUrlsEnum } from '../enums';
import * as jwt_decode from 'jwt-decode';

import { User } from '../models/user.model'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private handleError: HandleError;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(public http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('AuthService');

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(data): Observable<any> {
        const url = BACKEND_URL.concat(ApiUrlsEnum.Login);
        return this.http.post<any>(url, data, httpOptions)
            .pipe(
                catchError(this.handleError('login', data.email))
            );
    }

    userLogedIn(token) {
        localStorage.setItem('token', token);
        const decoded = jwt_decode(token);
        let user = { email: decoded.email, role: decoded.role } as User;
        this.currentUserSubject.next(user);
    }

    logout() {
        this.currentUserSubject.next(null);
        localStorage.removeItem('token');
    }

}
