import { define } from "@bake-js/element";
import { paint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on, { prevent } from "@bake-js/element/event";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("xyz-add-invite")
@paint(component, style)
class AddInvite extends Echo(HTMLElement) {
  #internals;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.reset("form")
  [trait.cancel]() {
    this.#internals.states.delete("opened");
    return this;
  }

  @on.click("button.add-invite__add")
  [trait.open]() {
    this.#internals.states.add("opened");
    return this;
  }

  @on.submit("form")
  @prevent
  [trait.submit](event) {
    const formData = new FormData(event.target, event.submitter);
    const detail = Object.fromEntries(formData);
    this.dispatchEvent(new CustomEvent("added", { detail }));
    this.#internals.states.delete("opened");
    return this;
  }
}

export default AddInvite;
