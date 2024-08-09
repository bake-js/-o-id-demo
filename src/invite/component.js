import { html } from "@bake-js/element/dom";

function component() {
  return html`
    <section class='invite'>
      <xyz-add-invite></xyz-add-invite>
      <xyz-invites></xyz-invites>
      <xyz-edit-invite></xyz-edit-invite>
      <xyz-send-invites></xyz-send-invites>
    </section>
  `;
}

export default component;
