import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HandleError, HttpErrorHandler } from './http/http-error-handler.service';
import { BACKEND_URL, ApiUrlsEnum } from '../enums';

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

    constructor(public http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('AuthService');
    }

    login(data): Observable<any> {
        const url = BACKEND_URL.concat(ApiUrlsEnum.Login);
        return this.http.post<any>(url, data, httpOptions)
        .pipe(
            catchError(this.handleError('login', data.email))
        );
    }
}
