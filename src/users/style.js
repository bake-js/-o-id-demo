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
      list-style: none;
      width: 100%;
    }

    .invites__li {
      border: var(--border-width-hairline) solid var(--color-master-light);
      display: flex;
      gap: var(--spacing_inset-xs);
      padding: var(--spacing_inset-xs);
      width: 100%;
    }

    .invites__li:first-of-type {
      border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
    }

    .invites__li:not(:first-of-type) {
      border-top: none;
    }

    .invites__li:last-of-type {
      border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
    }

    .invites__li-user {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-nano);
      justify-content: center;
      width: calc(100% - 116px);
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

    .invites__li-actions {
      display: flex;
      gap: var(--spacing_inset-xs);
      justify-content: end;
      width: 100px;
    }

    .invites__li-actions-remove {
      align-items: center;
      background-color: var(--color-danger-lighter);
      border: none;
      border-radius: var(--border-radius-sm);
      color: var(--color-danger-dark);
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      gap: var(--spacing_inset-nano);
      height: 42px;
      justify-content: center;
      line-height: var(--line-height-default);
      position: relative;
      width: 42px;

      svg {
        height: 18px;
        width: 18px;
      }
    }

    .invites__li-actions-remove:before {
      content: "";
      display: block;
      height: 42px;
      left: 0;
      position: absolute;
      top: 0;
      width: 42px;
    }
  `;
}

export default style;
