import { html } from "@bake-js/-o-id/dom";

function component() {
  return html`
    <section class='invite'>
      <h1 class='invite__heading'>Invite</h1>
      <div class='invite__container'>
        <xyz-add-user class='invite__add-invite'></xyz-add-user>
        <xyz-users class='invite__invites'>
          <o-id-echo-source on="xyz-add-user/added:method/push"></xyz-echo-source>
        </xyz-users>
      </div>
      <footer class='invite__footer'>
        <button class='invite__footer-cancel'>Cancel</button>
        <button class='invite__footer-send'>Send invites</button>
      </footer>
      <xyz-edit-invite></xyz-edit-invite>
    </section>
  `;
}

export default component;
