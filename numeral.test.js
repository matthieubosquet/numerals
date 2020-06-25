const convertToRomanNumeral = require('./numeral');

const romanNumeralsTests = [
  { value: -1, roman: "There are no negative roman numerals." },
  { value: 0, roman: "N" },
  { value: 5, roman: "V" },
  { value: 160, roman: "CLX" },
  { value: 3999, roman: "MMMCMXCIX" },
  { value: 4000, roman: "The largest number that can be represented in roman numeral \"standard\" form is 3,999." }
]

// n.b. this form doesn't show the nice little green check with vscode jest plugin
romanNumeralsTests.forEach(item => {
  test(`convertToRomanNumeral(${item.value}) to return ${item.roman}`, () => {
    expect(convertToRomanNumeral(item.value)).toBe(item.roman);
  })
})

// n.b. this form shows the nice little green check with vscode jest plugin
test('converToRomanNumeral(-1) to return a message', () => {
  expect(convertToRomanNumeral(-1)).toBe("There are no negative roman numerals.");
});
