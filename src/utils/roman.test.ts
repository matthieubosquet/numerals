import { convertNumberToRomanNumeral } from "./roman";
import { defaultLanguage, Language, message } from "../i18n/message";
import { Key } from "../i18n/locale";

const romanNumeralsTests = [
    { number: -1, roman: message(Key.RomanLowerLimit, defaultLanguage) },
    { number: 0, roman: "N" },
    { number: 5, roman: "V" },
    { number: 160, roman: "CLX" },
    { number: 789, roman: "DCCLXXXIX" },
    { number: 1066, roman: "MLXVI" },
    { number: 3999, roman: "MMMCMXCIX" },
    { number: 4000, roman: message(Key.RomanUpperLimit, defaultLanguage) },
    {
        number: 4000,
        roman: message(Key.RomanUpperLimit, Language.French),
        i18n: Language.French
    },
    { number: 4000, roman: message(Key.LocaleNotImplemented, -1), i18n: -1 }
];

romanNumeralsTests.forEach((romanNumeralsTest) => {
    test(`convertNumberToRomanNumeral(${romanNumeralsTest.number}) to return ${romanNumeralsTest.roman}`, () => {
        expect(
            convertNumberToRomanNumeral(
                romanNumeralsTest.number,
                romanNumeralsTest.i18n
            )
        ).toBe(romanNumeralsTest.roman);
    });
});
