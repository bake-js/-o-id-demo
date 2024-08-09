import { css } from "@bake-js/element/dom";

function style() {
  return css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .invites {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
    }

    .invites__heading {
      color: var(--color-master-dark);
      font-family: var(--font-family-highlight);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-default);
      margin: var(--spacing-xxxs) 0;
    }

    .invites__ul {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      list-style: none;
      width: 100%;
    }

    .invites__li {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-nano);
      justify-content: center;
      width: 100%;
    }

    .invites__li-name {
      align-items: center;
      color: var(--color-master-dark);
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      gap: var(--spacing_inset-xs);
      line-height: var(--line-height-default);
    }

    .invites__li-type {
      align-items: center;
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-pill);
      color: var(--color-master-dark);
      display: inline-flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxxs);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-default);
      height: 18px;
      padding: 0 var(--spacing_inset-nano);
    }

    .invites__li-email {
      color: var(--color-master);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-default);
    }

  `;
}

export default style;
