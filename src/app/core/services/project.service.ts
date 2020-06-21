import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HandleError, HttpErrorHandler } from './http/http-error-handler.service';
import { BACKEND_URL, ApiUrlsEnum } from '../enums';
import { Project } from '../models/project.model';
import { MessageService } from './http/message.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private handleError: HandleError;

    constructor(public http: HttpClient, httpErrorHandler: HttpErrorHandler, private messageService: MessageService) {
        this.handleError = httpErrorHandler.createHandleError('ProjectService');
    }

    getS(): Observable<Project[]> {
        const url = BACKEND_URL.concat(ApiUrlsEnum.Projects);
        return this.http.get<Project[]>(url)
            .pipe(
                tap(projects => this.log('fetched projects')),
                catchError(this.handleError('getS', []))
            );
    }

    post(data): Observable<any> {
        const url = BACKEND_URL.concat(ApiUrlsEnum.Projects);
        return this.http.post<any>(url, data, httpOptions)
            .pipe(
                catchError(this.handleError('post', data))
            );
    }


    private log(message: string) {
        this.messageService.add(`ProjectService: ${message}`);
    }
}
