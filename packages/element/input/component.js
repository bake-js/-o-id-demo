import { html } from "@bake-js/-o-id/dom";
import trait from "standard/trait";

function component(self) {
  return html`
    <div class='input__container'>
      <label class='input__label' for='${self.name}'>${self[trait.label]}</label>
      <input class='input' id='${self.name}' name='${self.name}' type='${self.type}' value='${self.value}' required />
      <span class='input__supportText'></span>
    </div>
  `;
}

export default component;
