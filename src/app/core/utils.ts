import { Insured } from 'common-lib';

export class Utils {
    static capitalizeFirstLetter(value: string): string {
        value = value.toLowerCase();
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    static capitalizeEachWord(value: string): string {
      return value.split(' ').reduce((previous, current) => previous + ' ' + this.capitalizeFirstLetter(current), '').trim();
    }

    static getFullName(insured: Insured): string {
        const regex = /\s+/;
        return this.capitalizeEachWord((this.cleanUndefined(insured.primerNombre) + ' ' + this.cleanUndefined(insured.segundoNombre)
            + ' ' + this.cleanUndefined(insured.primerApellido) + ' ' + this.cleanUndefined(insured.segundoApellido)).trim()
            .replace(regex, ' '));
    }

    static cleanUndefined(value: string): string {
        return value ? value : '';
    }
}
