import { define } from "@bake-js/element";
import { paint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on, { prevent } from "@bake-js/element/event";
import joinCut from "standard/joinCut";
import trait from "standard/trait";
import component from "./component";
import formData from "./formData";
import style from "./style";
import uid from "./uid";

@define("xyz-add-user")
@paint(component, style)
class Add extends Echo(HTMLElement) {
  #internals;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.click("button.add-invite__add")
  [trait.open]() {
    this.#internals.states.add("opened");
    return this;
  }

  @on.reset("form")
  [trait.reset]() {
    this.#internals.states.delete("opened");
    return this;
  }

  @on.submit("form")
  @prevent
  @joinCut(trait.didSubmit)
  [trait.submit](event) {
    const detail = {
      id: uid(),
      ...formData(event),
    };
    const options = { bubbles: true, cancelabel: true, detail };
    this.dispatchEvent(new CustomEvent("added", options));
    return this;
  }

  [trait.didSubmit](event) {
    event.target.reset();
    return this;
  }
}

export default Add;
