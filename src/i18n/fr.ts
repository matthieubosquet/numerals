import { Key, Locale } from "./locale";

// French messages translations
export const messages: Locale = {
    [Key.LocaleNotImplemented]: "Localisation non implémentée.",
    [Key.NumeralFormNotImplemented]: "Numération non implémentée.",
    [Key.NumeralFormUnknown]: "Ceci n'est pas un système de numération.",
    [Key.RomanLowerLimit]: "Il n'y a pas de nombres romains négatifs.",
    [Key.RomanUpperLimit]:
        "Le plus haut nombre en numération romaine standard est 3,999."
};
