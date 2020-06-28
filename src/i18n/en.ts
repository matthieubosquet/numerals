import { Key, Locale } from "./locale";

// English messages translations
export const messages: Locale = {
    [Key.LocaleNotImplemented]: "Locale not implemented.",
    [Key.NumeralFormNotImplemented]: "Numeral form not implemented.",
    [Key.NumeralFormUnknown]: "Unknown numeral form.",
    [Key.RomanLowerLimit]: "There are no negative roman numerals.",
    [Key.RomanUpperLimit]:
        'The largest number that can be represented in roman numeral "standard" form is 3,999.'
};
