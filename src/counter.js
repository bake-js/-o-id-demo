import { define, paint, on, repaint } from "@bake-js/element";
import component from "./component";

@define("element-counter")
@paint(component)
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
