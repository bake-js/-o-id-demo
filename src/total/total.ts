import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import trait from "standard/trait";
import component from "../tipAmount/component";
import style from "../tipAmount/style";

@define("o-id-total")
@paint(component, style)
class Total extends Echo(HTMLElement) {
  #bill = 0;
  #numberOfPeople = 1;
  #tip = 0;

  get value() {
    const tipAmount = (this.#bill / 100) * this.#tip;
    return Number(((this.#bill + tipAmount) / this.#numberOfPeople).toFixed(2));
  }

  get [trait.label]() {
    return "Total";
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @attributeChanged("bill")
  @repaint
  [trait.changeBill](value) {
    this.#bill = Number(value) || 0;
    return this;
  }

  @attributeChanged("numberofpeople")
  @repaint
  [trait.changeNumberOfPeople](value) {
    this.#numberOfPeople = Number(value) || 1;
    return this;
  }

  @attributeChanged("tip")
  @repaint
  [trait.changeTip](value) {
    this.#tip = Number(value) || 0;
    return this;
  }
}

export default Total;
