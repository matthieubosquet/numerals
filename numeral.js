// See https://en.wikipedia.org/wiki/List_of_numeral_systems
let systems = [ "roman", "chinese", "arabic" ]

// See https://en.wikipedia.org/wiki/Roman_numerals
// TODO add two parameters: value, system
function convertNumberToRomanNumeral(value) {
    let lookup = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
    let romanNumeral = '';
    let i;
    if (value < 0) {
        return "There are no negative roman numerals.";
    }
    if (value == 0) {
        return "N";
    }
    if (value > 3999) {
        return "The largest number that can be represented in roman numeral \"standard\" form is 3,999."
    }
    for ( i in lookup ) {
        while ( value >= lookup[i] ) {
            romanNumeral += i;
            value -= lookup[i];
        }
    }
    return romanNumeral;
}

module.exports = convertNumberToRomanNumeral;
