// See https://en.wikipedia.org/wiki/Roman_numerals
export function convertNumberToRomanNumeral(value: number) {
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
    let romanNumeral: string = "";
    let i: string;

    if (value < 0) {
        return "There are no negative roman numerals.";
    } else if (value === 0) {
        return "N";
    } else if (value > 3999) {
        return 'The largest number that can be represented in roman numeral "standard" form is 3,999.';
    } else {
        for (i in romanNumeralValues) {
            while (value >= romanNumeralValues[i]) {
                romanNumeral += i;
                value -= romanNumeralValues[i];
            }
        }
        return romanNumeral;
    }
}
