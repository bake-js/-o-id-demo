import { css } from "@bake-js/element/dom";

function style() {
  return css`
    .form {
      align-items: end;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      width: 460px;
    }

    .form__input {
      width: 100%;
    }

    .form__a {
      color: var(--color-complete);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxxs);
      font-weight: var(--font-weight-medium);
      line-height: var(--line-height-lg);
      margin-top: calc(var(--spacing-xxs) * -1);
      text-align: inherit;
      text-decoration: none;
      text-transform: inherit;
    }

    .form__button {
      align-items: center;
      background-color: var(--color-complete);
      border: var(--border-width-hairline) solid var(--color-complete);
      border-radius: 8px;
      color: var(--color-pure-white);
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-medium);
      gap: var(--spacing_inset-nano);
      height: 42px;
      justify-content: center;
      line-height: var(--line-height-default);
      padding: var(--spacing_inset-nano) var(--spacing_inset-sm);
      width: 100%;
    }
  `;
}

export default style;
