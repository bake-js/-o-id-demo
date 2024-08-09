import { define } from "@bake-js/element";
import { paint, repaint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on from "@bake-js/element/event";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("xyz-invites")
@paint(component, style)
class Invite extends Echo(HTMLElement) {
  #users;

  get [trait.users]() {
    return this.#users ?? [];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#users = [];
  }

  @repaint
  push(user) {
    this.#users.push(user);
    return this;
  }
}

export default Invite;
