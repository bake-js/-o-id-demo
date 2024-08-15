import { html } from "@bake-js/-o-id/dom";

function component() {
  return html`
    <section class='splitter'>
      <h1 class='splitter__heading'>-O-id Splitter</h1>
      <form class='splitter__form'>
        <div class='splitter__inputs'>
          <o-id-bill></o-id-bill>
          <o-id-select-tip></o-id-select-tip>
          <o-id-number-of-people></o-id-number-of-people>
        </div>
        <div class='splitter__result'>
          <div class='splitter__per'>
            <o-id-tip-amount>
              <o-id-echo-source on='o-id-bill/changed:attribute/bill'></o-id-echo-source>
              <o-id-echo-source on='o-id-select-tip/changed:attribute/tip'></o-id-echo-source>
              <o-id-echo-source on='o-id-number-of-people/changed:attribute/numberofpeople'></o-id-echo-source>
            </o-id-tip-amount>
            <o-id-total>
              <o-id-echo-source on='o-id-bill/changed:attribute/bill'></o-id-echo-source>
              <o-id-echo-source on='o-id-select-tip/changed:attribute/tip'></o-id-echo-source>
              <o-id-echo-source on='o-id-number-of-people/changed:attribute/numberofpeople'></o-id-echo-source>
            </o-id-total>
          </div>
          <button class='splitter__reset' type='reset'>Reset</button>
        </div>
      </form>
    </section>
  `;
}

export default component;
