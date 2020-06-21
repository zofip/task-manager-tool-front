import { environment } from 'src/environments/environment';

export const BACKEND_URL = environment.backend_url;

export enum TabAdminEnum {
    Projects = 'projects',
    Users = 'users'
}

export enum ApiUrlsEnum {
    Login = 'login',
    Projects = 'projects'
}