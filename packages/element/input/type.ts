import {
  define,
  disconnected,
  formAssociated,
  formReset,
} from "@bake-js/element";
import { didPaint, paint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on, { prevent } from "@bake-js/element/event";
import __ from "standard/dunder";
import * as f from "standard/f";
import joinCut from "standard/joinCut";
import trait from "standard/trait";
import component from "./component";
import style from "./style";
import supportText from "./supportText";

@define("xyz-type")
@paint(component, style)
class Type extends Echo(HTMLElement) {
  #controller;
  #internals;
  #supportText;
  #value;

  get form() {
    return this.#internals.form;
  }

  get name() {
    return "type";
  }

  get type() {
    return "text";
  }

  get validationMessage() {
    return this.#internals.validationMessage;
  }

  get validity() {
    return this.#internals.validity;
  }

  get value() {
    return (this.#value ??= "");
  }

  set value(value) {
    this.#value = value;
    this.shadowRoot.querySelector("input").value = value;
  }

  get willValidate() {
    return this.#internals.willValidate;
  }

  get [trait.label]() {
    return "Type";
  }

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
    this.#controller = new AbortController();
    this.#supportText = supportText.from(this);
  }

  checkValidity() {
    return this.#internals.checkValidity();
  }

  reportValidity() {
    return this.#internals.reportValidity();
  }

  @on.change("input")
  @joinCut(trait.setValidity)
  @joinCut(trait.check)
  [trait.change](event) {
    this.#value = event.target.value;
    return this;
  }

  @on.invalid("*")
  @prevent
  [trait.check](event) {
    if (f.isEmpty(this)) {
      this.#internals.states.add("invalid");
      this.#supportText.set("Type is required");
      return this;
    }

    this.#internals.states.delete("invalid");
    this.#supportText.remove();
    return this;
  }

  @disconnected
  [trait.remove]() {
    this.#controller.abort();
    return this;
  }

  @formReset
  @joinCut(trait.setValidity)
  [trait.reset]() {
    this.#internals.states.delete("invalid");
    this.#supportText.remove();
    this.value = "";
    return this;
  }

  @formAssociated
  [trait.setFormValue](form) {
    form.addEventListener(
      "formdata",
      (event) => event.formData.set(this.name, this.value),
      { signal: this.#controller.signal },
    );
    return this;
  }

  @didPaint
  [trait.setValidity]() {
    const { validationMessage, validity } =
      this.shadowRoot.querySelector("input");
    this.#internals.setValidity(validity, validationMessage);
    return this;
  }

  [__.isEmpty__]() {
    return this.value;
  }
}

export default Type;
