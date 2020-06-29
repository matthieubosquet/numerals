/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = async name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    if (!registry[name]) {
      
        await new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            
              script.src = name;
            
            // Ya never know
            script.defer = true;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      

      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
    }
    return registry[name];
  };

  const require = async (names, resolve) => {
    const modules = await Promise.all(names.map(singleRequire));
    resolve(modules.length === 1 ? modules[0] : modules);
  };

  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = new Promise(async resolve => {
      let exports = {};
      const module = {
        
          uri: location.origin + moduleName.slice(1)
        
      };
      const deps = await Promise.all(
        depsNames.map(depName => {
          if (depName === "exports") {
            return exports;
          }
          if (depName === "module") {
            return module;
          }
          return singleRequire(depName);
        })
      );
      const facValue = factory(...deps);
      if(!exports.default) {
        exports.default = facValue;
      }
      resolve(exports);
    });
  };
}
define("./numerals.js",['exports'], function (exports) { 'use strict';

    // List of locale keys
    var Key;
    (function (Key) {
        Key[Key["LocaleNotImplemented"] = 0] = "LocaleNotImplemented";
        Key[Key["NumeralFormNotImplemented"] = 1] = "NumeralFormNotImplemented";
        Key[Key["NumeralFormUnknown"] = 2] = "NumeralFormUnknown";
        Key[Key["RomanLowerLimit"] = 3] = "RomanLowerLimit";
        Key[Key["RomanUpperLimit"] = 4] = "RomanUpperLimit";
    })(Key || (Key = {}));

    var _a;
    // English messages translations
    var messages = (_a = {},
        _a[Key.LocaleNotImplemented] = "Locale not implemented.",
        _a[Key.NumeralFormNotImplemented] = "Numeral form not implemented.",
        _a[Key.NumeralFormUnknown] = "Unknown numeral form.",
        _a[Key.RomanLowerLimit] = "There are no negative roman numerals.",
        _a[Key.RomanUpperLimit] = 'The largest number that can be represented in roman numeral "standard" form is 3,999.',
        _a);

    var _a$1;
    // French messages translations
    var messages$1 = (_a$1 = {},
        _a$1[Key.LocaleNotImplemented] = "Localisation non implémentée.",
        _a$1[Key.NumeralFormNotImplemented] = "Numération non implémentée.",
        _a$1[Key.NumeralFormUnknown] = "Ceci n'est pas un système de numération.",
        _a$1[Key.RomanLowerLimit] = "Il n'y a pas de nombres romains négatifs.",
        _a$1[Key.RomanUpperLimit] = "Le plus haut nombre en numération romaine standard est 3,999.",
        _a$1);

    (function (Language) {
        Language[Language["English"] = 0] = "English";
        Language[Language["French"] = 1] = "French";
    })(exports.Language || (exports.Language = {}));
    var defaultLanguage = exports.Language.English;
    /**
     * Retrieve a localised string.
     *
     * @param key {Key}
     * @param lang {Language}
     * @returns {string}
     */
    function message(key, lang) {
        if (lang === exports.Language.English) {
            return messages[key];
        }
        else if (lang === exports.Language.French) {
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
    function convertNumberToRomanNumeral(number, i18n) {
        if (i18n === void 0) { i18n = defaultLanguage; }
        var romanNumeralValues = {
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
        var romanNumeral = "";
        var i;
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
            for (i in romanNumeralValues) {
                while (number >= romanNumeralValues[i]) {
                    romanNumeral += i;
                    number -= romanNumeralValues[i];
                }
            }
            return romanNumeral;
        }
    }

    (function (NumeralForm) {
        NumeralForm[NumeralForm["Chinese"] = 0] = "Chinese";
        NumeralForm[NumeralForm["Roman"] = 1] = "Roman";
    })(exports.NumeralForm || (exports.NumeralForm = {}));
    /**
     * Converts a number to a standard numeral form
     * See https://en.wikipedia.org/wiki/List_of_numeral_systems
     *
     * @param number {number}
     * @param form {NumeralForm}
     * @param i18n {Language}
     * @returns {string}
     */
    function convertNumberToNumeralForm(number, form, i18n) {
        if (i18n === void 0) { i18n = defaultLanguage; }
        if (form === exports.NumeralForm.Chinese) {
            return message(Key.NumeralFormNotImplemented, i18n);
        }
        else if (form === exports.NumeralForm.Roman) {
            return convertNumberToRomanNumeral(number, i18n);
        }
        else {
            return message(Key.NumeralFormUnknown, i18n);
        }
    }

    exports.convertNumberToNumeralForm = convertNumberToNumeralForm;

    Object.defineProperty(exports, '__esModule', { value: true });

});
