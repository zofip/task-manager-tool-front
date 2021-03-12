import { Project } from '../core/models/project.model';
import { projectsData } from './db-data';

export function setupProjects(): Project[] {
    return Object.values(projectsData) as Project[];
}
