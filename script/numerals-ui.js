// List of locale keys
var Key;
(function (Key) {
    Key[Key["LocaleNotImplemented"] = 0] = "LocaleNotImplemented";
    Key[Key["NumeralFormNotImplemented"] = 1] = "NumeralFormNotImplemented";
    Key[Key["NumeralFormUnknown"] = 2] = "NumeralFormUnknown";
    Key[Key["RomanLowerLimit"] = 3] = "RomanLowerLimit";
    Key[Key["RomanUpperLimit"] = 4] = "RomanUpperLimit";
})(Key || (Key = {}));

// English messages translations
const messages = {
    [Key.LocaleNotImplemented]: "Locale not implemented.",
    [Key.NumeralFormNotImplemented]: "Numeral form not implemented.",
    [Key.NumeralFormUnknown]: "Unknown numeral form.",
    [Key.RomanLowerLimit]: "There are no negative roman numerals.",
    [Key.RomanUpperLimit]: 'The largest number that can be represented in roman numeral "standard" form is 3,999.'
};

// French messages translations
const messages$1 = {
    [Key.LocaleNotImplemented]: "Localisation non implémentée.",
    [Key.NumeralFormNotImplemented]: "Numération non implémentée.",
    [Key.NumeralFormUnknown]: "Ceci n'est pas un système de numération.",
    [Key.RomanLowerLimit]: "Il n'y a pas de nombres romains négatifs.",
    [Key.RomanUpperLimit]: "Le plus haut nombre en numération romaine standard est 3,999."
};

var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["French"] = 1] = "French";
})(Language || (Language = {}));
const defaultLanguage = Language.English;
/**
 * Retrieve a localised string.
 *
 * @param key {Key}
 * @param lang {Language}
 * @returns {string}
 */
function message(key, lang) {
    if (lang === Language.English) {
        return messages[key];
    }
    else if (lang === Language.French) {
        return messages$1[key];
    }
    else {
        return messages[Key.LocaleNotImplemented];
    }
}

/**
 * Converts a number to its Roman numeral form.
 * See https://en.wikipedia.org/wiki/Roman_numerals
 *
 * @param number {number}
 * @returns {string}
 */
function convertNumberToRomanNumeral(number, i18n = defaultLanguage) {
    let RomanNumeralValues;
    (function (RomanNumeralValues) {
        RomanNumeralValues[RomanNumeralValues["M"] = 1000] = "M";
        RomanNumeralValues[RomanNumeralValues["CM"] = 900] = "CM";
        RomanNumeralValues[RomanNumeralValues["D"] = 500] = "D";
        RomanNumeralValues[RomanNumeralValues["CD"] = 400] = "CD";
        RomanNumeralValues[RomanNumeralValues["C"] = 100] = "C";
        RomanNumeralValues[RomanNumeralValues["XC"] = 90] = "XC";
        RomanNumeralValues[RomanNumeralValues["L"] = 50] = "L";
        RomanNumeralValues[RomanNumeralValues["XL"] = 40] = "XL";
        RomanNumeralValues[RomanNumeralValues["X"] = 10] = "X";
        RomanNumeralValues[RomanNumeralValues["IX"] = 9] = "IX";
        RomanNumeralValues[RomanNumeralValues["V"] = 5] = "V";
        RomanNumeralValues[RomanNumeralValues["IV"] = 4] = "IV";
        RomanNumeralValues[RomanNumeralValues["I"] = 1] = "I";
    })(RomanNumeralValues || (RomanNumeralValues = {}));
    let romanNumeral = "";
    let i;
    if (number < 0) {
        return message(Key.RomanLowerLimit, i18n);
    }
    else if (number === 0) {
        return "N";
    }
    else if (number > 3999) {
        return message(Key.RomanUpperLimit, i18n);
    }
    else {
        // Construct roman numeral using the highest matching value (the actual logic behind writing them)
        for (i in RomanNumeralValues) {
            // Iterating over Numeric enums returns values and keys (unlike String enums), so check it's a key
            if (isNaN(Number(i))) {
                while (number >= Number(RomanNumeralValues[i])) {
                    romanNumeral += i;
                    number -= Number(RomanNumeralValues[i]);
                }
            }
        }
        return romanNumeral;
    }
}

// TODO extend to other numeral forms
var NumeralForm;
(function (NumeralForm) {
    NumeralForm[NumeralForm["Chinese"] = 0] = "Chinese";
    NumeralForm[NumeralForm["Roman"] = 1] = "Roman";
})(NumeralForm || (NumeralForm = {}));
/**
 * Converts a number to a standard numeral form
 * See https://en.wikipedia.org/wiki/List_of_numeral_systems
 *
 * @param number {number}
 * @param form {NumeralForm}
 * @param i18n {Language}
 * @returns {string}
 */
function convertNumberToNumeralForm(number, form, i18n = defaultLanguage) {
    if (form === NumeralForm.Chinese) {
        return message(Key.NumeralFormNotImplemented, i18n);
    }
    else if (form === NumeralForm.Roman) {
        return convertNumberToRomanNumeral(number, i18n);
    }
    else {
        return message(Key.NumeralFormUnknown, i18n);
    }
}

var templateString = "<label for=\"number\">Number:</label> <input type=\"number\" id=\"number\" name=\"number\"> <button id=\"roman-numeral\" for=\"number\">Translate to Roman Numeral</button> <span id=\"result\"></span>";

const template = document.createElement("template");
template.innerHTML = templateString;
class NumeralsUI extends HTMLElement {
    constructor() {
        super();
        // Define Shadow root and create node
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
        const number = (shadowRoot.querySelector("#number"));
        const result = shadowRoot.querySelector("#result");
        const roman = (shadowRoot.querySelector("#roman-numeral"));
        if (number && roman) {
            number.addEventListener("keyup", (event) => {
                if (event.keyCode === 13) {
                    roman.click();
                }
            });
            if (result) {
                roman.addEventListener("click", async () => {
                    const value = parseFloat(number.value);
                    const romanNumeralForm = convertNumberToNumeralForm(value, NumeralForm.Roman, Language.English);
                    result.innerHTML = `The roman numeral form of ${value} is: ${romanNumeralForm}`;
                });
            }
        }
    }
}
customElements.define("numerals-ui", NumeralsUI);
