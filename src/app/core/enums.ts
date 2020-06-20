import { environment } from 'src/environments/environment';

export const BACKEND_URL = environment.backend_url;

export enum RolesEnum {
    Insured = 'asegurado',
    Agent = 'agente'
}

export enum ApiUrlsEnum {
    Login = 'login'
}