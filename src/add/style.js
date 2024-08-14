import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .add-invite {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
    }

    .add-invite__add {
      align-items: center;
      background-color: var(--color-master-light);
      border: none;
      border-radius: var(--border-radius-sm);
      color: var(--color-master-dark);
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

      svg {
        height: 18px;
        width: 18px;
      }
    }

    .add-invite__form {
      align-items: start;
      border: var(--border-width-hairline) solid var(--color-master-light);
      border-radius: var(--border-radius-sm);
      content-visibility: auto;
      display: none;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      padding: var(--spacing_inset-sm);
      width: 100%;

      svg {
        height: 18px;
        width: 18px;
      }
    }

    .add-invite__form-input {
      width: 360px;
    }

    .add-invite__form-user-heading {
      color: var(--color-master-dark);
      font-family: var(--font-family-highlight);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-default);
      margin: var(--spacing-xxxs) 0;
    }

    .add-invite__form-footer {
      display: flex;
      gap: var(--spacing_inset-sm);
      margin: var(--spacing-xxxs) 0;
    }

    .add-invite__form-reset,
    .add-invite__form-submit {
      align-items: center;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      gap: var(--spacing_inset-nano);
      justify-content: center;
      line-height: var(--line-height-default);
    }

    .add-invite__form-reset {
      color: var(--color-master-dark);
    }

    .add-invite__form-submit {
      color: var(--color-complete-dark);
    }

    :host(:state(opened)) {
      .add-invite__form {
        display: flex;
      }
    }
  `;
}

export default style;
