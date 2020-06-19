import { environment } from 'src/environments/environment';

export const BACKEND_URL = environment.backend_url;
export const KEYCLOAK_CONFIG = environment.KEYCLOAK_CONFIG.url;
export const CLIENT_ID = environment.KEYCLOAK_CONFIG.clientId;

export enum RolesEnum {
    Insured = 'asegurado',
    Agent = 'agente'
}