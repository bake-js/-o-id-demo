import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import joinCut from "standard/joinCut";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("o-id-tip-amount")
@paint(component, style)
class TipAmount extends Echo(HTMLElement) {
  #bill = 0;
  #numberOfPeople = 1;
  #tip = 0;

  get value() {
    return Number(
      (((this.#bill / 100) * this.#tip) / this.#numberOfPeople).toFixed(2),
    );
  }

  get [trait.label]() {
    return "Tip Amount";
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

export default TipAmount;
