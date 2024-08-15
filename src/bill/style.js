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

    .input__container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-nano);
      position: relative;
      width: 100%;
    }

    .input__label {
      color: var(--color-primary-darker);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-medium);
      line-height: var(--line-height-md);
    }

    .input {
      appearance: none;
      background-color: transparent;
      border: var(--border-width-hairline) solid var(--color-primary-darker);
      border-radius: var(--border-radius-sm);
      color: var(--color-primary-dark);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-regular);
      height: 42px;
      line-height: var(--line-height-default);
      padding: 0 var(--spacing_inset-xs);
      text-align: right;
      width: 100%;
    }

    .input:active,
    .input:hover {
      outline: 0;
    }

    .input:focus {
      background-color: var(--color-primary-lighter);
      outline: 0;
    }

    .input:-webkit-autofill,
    .input:-webkit-autofill:hover, 
    .input:-webkit-autofill:focus, 
    .input:-webkit-autofill:active {
      transition: background-color 9999999999s ease-in-out 0s
    }

    .input::placeholder {
      color: var(--color-master);
    }

    .input__supportText {
      align-items: center;
      color: var(--color-master);
      display: none;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxxs);
      font-weight: var(--font-weight-regular);
      gap: var(--spacing_inset-quarck);
      line-height: var(--line-height-md);

      svg {
        aspect-ratio: 1 / 1;
        height: 18x;
        width: 18px;
      }
    }

    .input__supportText::before {
      content: attr(data-text);
      display: inline;
    }

    :host(:state(invalid)) {
      .input__label {
        color: var(--color-danger);
      }

      .input {
        background-color: var(--color-danger-lighter);
        border-color: var(--color-danger);
      }

      .input__supportText {
        color: var(--color-danger);
        display: flex;
      }
    }
  `;
}

export default style;
