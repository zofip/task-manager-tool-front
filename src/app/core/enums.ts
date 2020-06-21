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

export enum UrlsEnum {
    Home = '/home',
    Admin = '/admin'
}

export enum Role {
    Developer = 'Developer',
    Admin = 'Admin'
}