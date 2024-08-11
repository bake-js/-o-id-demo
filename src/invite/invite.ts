import { define } from "@bake-js/element";
import { paint, repaint, willPaint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on from "@bake-js/element/event";
import joinCut from "standard/joinCut";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("xyz-invite")
@paint(component, style)
class Invite extends Echo(HTMLElement) {
  #internals;
  #users;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
    this.#users = [];
  }

  @on.click("button.invite__footer-cancel")
  @repaint
  [trait.cancel]() {
    this.#users = [];
    return this;
  }

  @on.changed("xyz-users")
  @joinCut(trait.setState)
  [trait.usersChanged](event) {
    this.#users = event.detail;
    return this;
  }

  @on.click("button.invite__footer-send")
  [trait.sendInvites]() {
    console.table(this.#users);
    return this;
  }

  @willPaint
  [trait.setState]() {
    this.#users.length
      ? this.#internals.states.delete("invalid")
      : this.#internals.states.add("invalid");
    return this;
  }
}

export default Invite;
