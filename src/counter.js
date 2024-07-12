import { define, on, paint, repaint } from "@bake-js/element";
import component from "./component";
import style from "./style";

@define("element-counter")
@paint(component, style)
class Counter extends HTMLElement {
  #number;

  get number() {
    return this.#number ?? 0;
  }

  set number(value) {
    this.#number = value;
  }

  @on.click("button")
  @repaint
  increment() {
    this.number += 1;
    return this;
  }
}
