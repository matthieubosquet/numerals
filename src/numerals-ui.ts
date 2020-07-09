import { convertNumberToNumeralForm, Language, NumeralForm } from "./numerals";
import templateString from "./numerals-ui.html";

const template = document.createElement("template");
template.innerHTML = templateString;

class NumeralsUI extends HTMLElement {
    constructor() {
        super();
        // Define Shadow root and create node
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));

        const number: HTMLInputElement | null = <HTMLInputElement | null>(
            shadowRoot.querySelector("#number")
        );
        const result: HTMLElement | null = shadowRoot.querySelector("#result");
        const roman: HTMLInputElement | null = <HTMLInputElement | null>(
            shadowRoot.querySelector("#roman-numeral")
        );

        if (number && roman) {
            number.addEventListener("keyup", (event) => {
                if (event.keyCode === 13) {
                    roman.click();
                }
            });
            if (result) {
                roman.addEventListener("click", async () => {
                    const value = parseFloat(number.value);
                    const romanNumeralForm = convertNumberToNumeralForm(
                        value,
                        NumeralForm.Roman,
                        Language.English
                    );
                    result.innerHTML = `The roman numeral form of ${value} is: ${romanNumeralForm}`;
                });
            }
        }
    }
}

customElements.define("numerals-ui", NumeralsUI);
