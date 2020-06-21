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
    Home = '/home'
}

export enum Role {
    Developer = 'developer',
    Admin = 'admin',
    Unknow = 'unknow',
}

export enum TitleDialogEnum {
    Warn = 'Warning',
    Info = 'Info',
    Error = 'Error'
}

export enum IconsEnum {
    Error = 'error',
    Info = 'info'
}

export enum ColorsEnum {
    Info = 'primary',
    Error = 'warn',
    Warn = 'accent'
}

export enum MsgDialogEnum {
    Info = 'Info',
    Error = 'Error',
    Warn = 'Warn'
}

export enum ErrorStatusEnum {
    OK = 200
}

export enum MessagesEnum {
    savedSuccessfully = 'Saved successfully',
    serviceError = 'Service Error'
}