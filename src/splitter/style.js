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

    .splitter {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      justify-content: center;
      height: 100svh;
      padding: var(--spacing_inset-sm);
      width: 100%;
    }

    .splitter__heading {
      color: var(--color-primary-darker);
      font-family: var(--font-family-highlight);
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-md);
    }

    .splitter__form {
      background-color: var(--color-pure-white);
      border-radius: var(--border-radius-md);
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      max-width: 768px;
      padding: var(--spacing_inset-sm);
      width: 100%;
    }

    @media (width >= 768px) {
      .splitter__form {
        flex-direction: row;
      }
    }

    .splitter__inputs {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
    }

    @media (width >= 768px) {
      .splitter__inputs {
        width: calc(50% - calc(var(--spacing_inset-sm) / 2));
      }
    }

    .splitter__result {
      background-color: var(--color-primary);
      border-radius: var(--border-radius-sm);
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      padding: var(--spacing_inset-sm);
    }

    .splitter__per {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
    }

    @media (width >= 768px) {
      .splitter__result {
        justify-content: space-between;
        width: calc(50% - calc(var(--spacing_inset-sm) / 2));
      }
    }

    .splitter__reset {
      background-color: var(--color-master-lightest);
      border: none;
      border-radius: var(--border-radius-sm);
      color: var(--color-primary-darker);
      cursor: pointer;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      line-height: var(--line-height-md);
      height: 42px;
    }
  `;
}

export default component;
