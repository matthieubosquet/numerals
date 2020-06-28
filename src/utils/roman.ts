import { defaultLanguage, Language, message } from "../i18n/message";
import { Key } from "../i18n/locale";

/**
 * Converts a number to its Roman numeral form.
 * See https://en.wikipedia.org/wiki/Roman_numerals
 *
 * @param number {number}
 * @returns {string}
 */
export function convertNumberToRomanNumeral(
    number: number,
    i18n: Language = defaultLanguage
): string {
    const romanNumeralValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNumeral = "";
    let i: string;

    if (number < 0) {
        return message(Key.RomanLowerLimit, i18n);
    } else if (number === 0) {
        return "N";
    } else if (number > 3999) {
        return message(Key.RomanUpperLimit, i18n);
    } else {
        // Construct roman numeral using the highest matching value (the actual logic behind writing them)
        for (i in romanNumeralValues) {
            while (number >= romanNumeralValues[i]) {
                romanNumeral += i;
                number -= romanNumeralValues[i];
            }
        }
        return romanNumeral;
    }
}
