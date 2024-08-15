import { css } from "@bake-js/-o-id/dom";

function component() {
  return css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .tipAmount {
      display: flex;
      gap: var(--spacing_inset-sm);
      justify-content: space-between;
    }

    .tipAmount__label {
      display: flex;
      flex-direction: column;

      strong {
        color: var(--color-master-lightest);
        font-family: var(--font-family-highlight);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-md);
      }

      span {
        color: var(--color-primary-lighter);
        font-family: var(--font-family-base);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-md);
      }
    }

    .tipAmount__value {
      color: var(--color-master-lightest);
      font-family: var(--font-family-highlight);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-md);
    }
  `;
}

export default component;
