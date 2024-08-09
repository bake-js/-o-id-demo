import { css } from "@bake-js/element/dom";

function style() {
  return css`
    .invite {
      background-color: var(--color-pure-white);
      border-radius: var(--border-radius-sm);
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      padding: var(--spacing_inset-sm);
    }
  `;
}

export default style;
