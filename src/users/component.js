import { html } from "@bake-js/element/dom";
import trait from "standard/trait";
import { remove } from "./icons";

function component(self) {
  return html`
    <section class='invites'>
      <h1 class='invites__heading'>Users</h1>
      <ul class='invites__ul'>
        ${self[trait.invites].map(
          (user) => html`
            <li class='invites__li'>
              <div class='invites__li-user'>
                <div class='invites__li-name'>${user.name} <strong class="invites__li-type">${user.type}</strong></div>
                <div class='invites__li-email'>${user.email}</div>
              </div>
              <div class='invites__li-actions'>
                <button class='invites__li-actions-remove' data-id='${user.id}'>${remove}</button>
              </div>
            </li>
          `,
        )}
      </ul>
    </section>
  `;
}

export default component;
