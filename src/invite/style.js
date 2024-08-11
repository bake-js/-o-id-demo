import { css } from "@bake-js/element/dom";

function style() {
  return css`
    .invite {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
    }

    .invite__heading {
      color: var(--color-master-dark);
      font-family: var(--font-family-highlight);
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-default);
      margin: var(--spacing-xxxs) 0;
    }

    .invite__container {
      align-items: start;
      background-color: var(--color-pure-white);
      border-radius: var(--border-radius-sm);
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      padding: var(--spacing_inset-sm);
      width: 100%;
    }

    .invite__add-invite,
    .invite__invites {
      width: 100%;
    }

    .invite__footer {
      display: flex;
      gap: var(--spacing_inset-sm);
    }

    .invite__footer-cancel,
    .invite__footer-send {
      align-items: center;
      background-color: transparent;
      border: var(--border-width-hairline) solid var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      gap: var(--spacing_inset-nano);
      height: 42px;
      justify-content: center;
      line-height: var(--line-height-default);
      padding: 0 var(--spacing_inset-sm);
    }


    .invite__footer-send {
      background-color: var(--color-success);
      border-color: var(--color-success);
      color: var(--color-master-lightest);
    }

    :host(:state(invalid)) {
      .invite__footer-send {
        opacity: 0.32;
      }
    }
  `;
}

export default style;
