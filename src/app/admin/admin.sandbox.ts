import { Injectable } from '@angular/core';
import { ProjectService } from '../core/services/project.service';
import { Observable } from 'rxjs';
import { Project } from '../core/models/project.model';


@Injectable()
export class AdminSandbox {

    public projects$: Observable<Project[]>;

    constructor(private projectService: ProjectService) {}

    getProjects() {
        this.projects$ = this.projectService.getS();
    }

    post(dataProject): any {
        return this.projectService.post(dataProject);
    }

}
