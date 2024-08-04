import { html } from "@bake-js/element/dom";
import trait from "standard/trait";

function component() {
  return html`
    <form class='form'>
      <xyz-email class='form__input'></xyz-email>
      <xyz-password class='form__input'></xyz-password>
      <a class='form__a' href='#'>Forgot password?</a>
      <button class='form__button'>Sign in</button>
    </form>
  `;
}

export default component;
