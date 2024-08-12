import { define } from "@bake-js/element";
import { paint, repaint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on from "@bake-js/element/event";
import joinCut from "standard/joinCut";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("xyz-users")
@paint(component, style)
class Users extends Echo(HTMLElement) {
  #invites;

  get [trait.invites]() {
    return Object.values(this.#invites);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#invites = {};
  }

  @repaint
  @joinCut(trait.dispatchChanged)
  push(user) {
    Object.assign(this.#invites, {
      [user.id]: user,
    });
    return this;
  }

  [trait.dispatchChanged]() {
    const event = new CustomEvent("changed");
    const config = {
      bubbles: true,
      cancelable: true,
      detail: this[trait.invites],
    };
    this.dispatchEvent(event, config);
    return this;
  }

  @on.click("button.invites__li-actions-remove")
  @repaint
  @joinCut(trait.dispatchChanged)
  [trait.remove](event) {
    delete this.#invites[event.target.dataset.id];
    return this;
  }
}

export default Users;
