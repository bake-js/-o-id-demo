import { html } from "@bake-js/element/dom";
import trait from "standard/trait";

function component(self) {
  return html`
    <section class='invites'>
      <h1 class='invites__heading'>Users</h1>
      <ul class='invites__ul'>
        ${self[trait.users].map(
          (user) => html`
            <li class='invites__li'>
              <div class='invites__li-name'>${user.name} <strong class="invites__li-type">${user.type}</strong></div>
              <div class='invites__li-email'>${user.email}</div>
            </li>
          `,
        )}
      </ul>
    </section>
  `;
}

export default component;
