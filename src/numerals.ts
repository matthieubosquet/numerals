import { convertNumberToRomanNumeral } from "./utils/roman";
import { defaultLanguage, Language, message } from "./i18n/message";
import { Key } from "./i18n/locale";
/* istanbul ignore file */
export { Language } from "./i18n/message";

// TODO extend to other numeral forms
export enum NumeralForm {
    Chinese,
    Roman
}

/**
 * Converts a number to a standard numeral form
 * See https://en.wikipedia.org/wiki/List_of_numeral_systems
 *
 * @param number {number}
 * @param form {NumeralForm}
 * @param i18n {Language}
 * @returns {string}
 */
export function convertNumberToNumeralForm(
    number: number,
    form: NumeralForm,
    i18n: Language = defaultLanguage
): string {
    if (form === NumeralForm.Chinese) {
        return message(Key.NumeralFormNotImplemented, i18n);
    } else if (form === NumeralForm.Roman) {
        return convertNumberToRomanNumeral(number, i18n);
    } else {
        return message(Key.NumeralFormUnknown, i18n);
    }
}
