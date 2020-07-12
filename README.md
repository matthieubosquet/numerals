![Node.js CI](https://github.com/matthieubosquet/numerals/workflows/Node.js%20CI/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/matthieubosquet/numerals/branch/master/graph/badge.svg)](https://codecov.io/gh/matthieubosquet/numerals)

# Numerals

Convert numbers to their form in a numeral system.

Currently only implements the [roman numerals system](https://en.wikipedia.org/wiki/Roman_numerals) converter.

See also: [https://en.wikipedia.org/wiki/List_of_numeral_systems](https://en.wikipedia.org/wiki/List_of_numeral_systems)

[Try the converter!](https://neig.es/numerals/)

## How-to?

- Install the package

```bash
npm i numerals
```

- Use the package

```javascript
import { Language, NumeralForm, convertNumberToNumeralForm } from 'numerals';

let x = convertNumberToNumeralForm(8, NumeralForm.Roman, Language.English);

// Outputs VIII
console.log(x);
```

- Get the web component

```bash
wget https://neig.es/numerals/script/numerals-ui.js
```

- Use the web component

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numerals converter</title>
</head>
<body>
    <numerals-ui></numerals-ui>
    <script src="./script/numerals-ui.js"></script>
</body>
</html>
```

<!--
```
<custom-element-demo>
  <template>
    <numerals-ui></numerals-ui>
    <script src="./script/numerals-ui.js"></script>
  </template>
</custom-element-demo>
```
-->
