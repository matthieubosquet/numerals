const template = document.createElement('template');
template.innerHTML = `
    <label for="number">Number:</label>
    <input type="number" id="number" name="number">
    <button id="roman-numeral" for="number">Translate to Roman Numeral</button>
    <span id="result"></span>
`;
class NumeralsUI extends HTMLElement {
    constructor() {
        super();
        // Define Shadow root and create node
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
        const number = shadowRoot.querySelector("#number");
        const result = shadowRoot.querySelector("#result");
        const roman = shadowRoot.querySelector("#roman-numeral");
        if (number && roman) {
            number.addEventListener("keyup", (event) => {
                if (event.keyCode === 13) {
                    roman.click();
                }
            });
            if (result) {
                roman.addEventListener("click", async () => {
                    const numerals = await import('./numerals-d102f025.js');
                    const value = parseFloat(number.value);
                    const romanNumeralForm = numerals.convertNumberToNumeralForm(value, numerals.NumeralForm.Roman, numerals.Language.English);
                    result.innerHTML = `The roman numeral form of ${value} is: ${romanNumeralForm}`;
                });
            }
        }
    }
}
customElements.define('numerals-ui', NumeralsUI);
