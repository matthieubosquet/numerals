// List of locale keys
export enum Key {
    LocaleNotImplemented,
    NumeralFormNotImplemented,
    NumeralFormUnknown,
    RomanLowerLimit,
    RomanUpperLimit
}

export type Locale = {
    [key in Key]: string;
};
