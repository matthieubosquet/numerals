import { Key } from "./locale";
import { messages as en } from "./en";
import { messages as fr } from "./fr";

export enum Language {
    English,
    French
}

export const defaultLanguage: Language = Language.English;

/**
 * Retrieve a localised string.
 *
 * @param key {Key}
 * @param lang {Language}
 * @returns {string}
 */
export function message(key: Key, lang: Language): string {
    if (lang === Language.English) {
        return en[key];
    } else if (lang === Language.French) {
        return fr[key];
    } else {
        return en[Key.LocaleNotImplemented];
    }
}
