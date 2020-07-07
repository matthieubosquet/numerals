const number = document.querySelector("#number");
const result = document.querySelector("#result");
const roman = document.querySelector("#roman-numeral");
number.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        roman.click();
    }
});
roman.addEventListener("click", async () => {
    const numerals = await import('./numerals-d102f025.js');
    const value = parseFloat(number.value);
    const romanNumeralForm = numerals.convertNumberToNumeralForm(value, numerals.NumeralForm.Roman, numerals.Language.English);
    result.innerHTML = `Roman numeral form of ${value}: ${romanNumeralForm}`;
});
