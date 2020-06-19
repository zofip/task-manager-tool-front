import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HandleError, HttpErrorHandler } from './http/http-error-handler.service';
import { ApiUrlsEnum, BACKEND_URL } from '../enums/enums';


@Injectable({
    providedIn: 'root'
})
export class ParametroService {

    private handleError: HandleError;

    constructor(public http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('ParametroService');
    }

    getByCod(code: string): Observable<any> {
        const url = BACKEND_URL.concat(ApiUrlsEnum.Parameter)
            .concat(code);
        return this.http.get<any>(url).pipe(
            catchError(this.handleError('getByCod', {}))
        );
    }
}
