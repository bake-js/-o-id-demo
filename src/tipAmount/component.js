import { html } from "@bake-js/-o-id/dom";
import trait from "standard/trait";

function component(self) {
  return html`
    <div class='tipAmount'>
      <div class='tipAmount__label'>
        <strong>${self[trait.label]}</strong>
        <span>/ person</span>
      </div>
      <div class='tipAmount__value'>$ ${self.value}</div>
    </div>
  `;
}

export default component;
