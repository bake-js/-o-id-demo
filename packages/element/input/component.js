import { html } from "@bake-js/element/dom";
import trait from "standard/trait";

function component(self) {
  return html`
    <div class='input__container'>
      <label class='input__label' for='xyz'>${self[trait.label]}</label>
      <input class='input' id='xyz' type='${self[trait.type]}' value='${self[trait.value]}' required />
      <span class='input__message'>
        ${self[trait.message]}
      </span>
    </div>
  `;
}

export default component;
