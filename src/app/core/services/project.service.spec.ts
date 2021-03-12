import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { projectsData } from 'src/app/__test__/db-data';
import { JsxEmit } from 'typescript';
import { ApiUrlsEnum, BACKEND_URL } from '../enums';
import { HttpErrorHandler } from './http/http-error-handler.service';
import { MessageService } from './http/message.service';
import { ProjectService } from "./project.service";

describe("ProjectService", () => {
    const url = BACKEND_URL.concat(ApiUrlsEnum.Projects);

    let projectService: ProjectService,
        httpTestingController: HttpTestingController,
        httpErrorHandlerSpy: any,
        messageServiceSpy: any;

    beforeEach(() => {
        httpErrorHandlerSpy = jasmine.createSpyObj('HttpErrorHandler', ['createHandleError']);
        httpErrorHandlerSpy.createHandleError.and.returnValue(() => { });

        messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ProjectService,
                { provide: HttpErrorHandler, useValue: httpErrorHandlerSpy },
                { provide: MessageService, useValue: messageServiceSpy }
            ]
        });

        projectService = TestBed.inject(ProjectService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should retrieve all projects', () => {
        projectService.getS()
            .subscribe(projects => {
                expect(projects).toBeTruthy('No projects returned');
                expect(projects.length).toBe(2, 'Incorrect number of projects');

                const project = projects.find(project => project.code === '2');
                expect(project.name).toBe('Angular Sixto');
            });

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toEqual('GET');
        req.flush(projectsData);
    });

    it(' should save a project', () => {
        const project = { code: '3', name: 'Angular Zofi' };
        projectService.post(project)
            .subscribe(project => {
                expect(project.id).toBe('3');
            });

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toEqual('POST');
        expect(req.request.body.code).toEqual(project.code);
        req.flush({
            id: '3',
            code: '3',
            name: 'Angular Zofi'
        });
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});