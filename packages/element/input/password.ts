import { define, formAssociated, formReset } from "@bake-js/element";
import { didPaint, paint, repaint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on, { prevent } from "@bake-js/element/event";
import __ from "standard/dunder";
import * as f from "standard/f";
import joinCut from "standard/joinCut";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("xyz-password")
@paint(component, style)
class Password extends Echo(HTMLElement) {
  #internals;
  #message;
  #value;

  get value() {
    return (this.#value ??= "");
  }

  get [trait.label]() {
    return "Password";
  }

  get [trait.message]() {
    return (this.#message ??= "");
  }

  get [trait.type]() {
    return "password";
  }

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.change("input")
  @joinCut(trait.check)
  [trait.change](event) {
    this.#value = event.target.value;
    return this;
  }

  @on.invalid("*")
  @prevent
  @repaint
  [trait.check](event) {
    if (f.isEmpty(this)) {
      this.#internals.states.add("invalid");
      this.#message = "Password is required";
      return this;
    }

    this.#internals.states.delete("invalid");
    this.#message = "";
    return this;
  }

  @formReset
  @repaint
  [trait.reset]() {
    this.#internals.states.delete("invalid");
    this.#message = "";
    this.#value = "";
    return this;
  }

  @formAssociated
  [trait.setFormValue](form) {
    form.addEventListener("formdata", (event) =>
      event.formData.set("password", this.value),
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

export default Password;
