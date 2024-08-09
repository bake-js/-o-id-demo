import { html } from "@bake-js/element/dom";

function component() {
  return html`
    <section class='invite'>
      <h1 class='invite__heading'>Invite</h1>
      <div class='invite__container'>
        <xyz-add-invite class='invite__add-invite' id="add-invite"></xyz-add-invite>
        <xyz-invites class='invite__invites'>
          <xyz-echo-source on="add-invite/added:method/push"></xyz-echo-source>
        </xyz-invites>
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
