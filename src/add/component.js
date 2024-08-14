import { html } from "@bake-js/-o-id/dom";
import trait from "standard/trait";
import { add } from "./icons";

function component() {
  return html`
    <section class='add-invite'>
      <button class='add-invite__add'>
        ${add} Add new invite
      </button>
      <form class='add-invite__form'>
        <h1 class='add-invite__form-user-heading'>Level permission</h1>
        <xyz-type class='add-invite__form-input'></xyz-type> 
        <h2 class='add-invite__form-user-heading'>User information</h2>
        <xyz-name class='add-invite__form-input'></xyz-name>
        <xyz-email class='add-invite__form-input'></xyz-email>
        <footer class='add-invite__form-footer'>
          <button class='add-invite__form-reset' type='reset'>Cancel</button>
          <button class='add-invite__form-submit' type='submit'>Add users</button>
        </footer>
      </form>
    </section>
 `;
}

export default component;
