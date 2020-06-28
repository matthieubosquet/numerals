import { convertNumberToNumeralForm, NumeralForm } from "./index";
import { defaultLanguage, message } from "./i18n/message";
import { Key } from "./i18n/locale";

const numeralFormTests = [
    { number: 1, form: NumeralForm.Roman, value: "I" },
    { number: 1, form: NumeralForm.Roman, value: "I", i18n: -1 },
    {
        number: 1,
        form: NumeralForm.Chinese,
        value: message(Key.NumeralFormNotImplemented, defaultLanguage)
    },
    {
        number: 1,
        form: -1,
        value: message(Key.NumeralFormUnknown, defaultLanguage)
    }
];

numeralFormTests.forEach((numeralFormTest) => {
    test(`convertNumberToNumeralForm(${numeralFormTest.number}, ${numeralFormTest.form}) to return ${numeralFormTest.value}`, () => {
        expect(
            convertNumberToNumeralForm(
                numeralFormTest.number,
                numeralFormTest.form,
                numeralFormTest.i18n
            )
        ).toBe(numeralFormTest.value);
    });
});
