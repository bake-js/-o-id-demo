import { define, formAssociated, formReset } from "@bake-js/element";
import { didPaint, paint, repaint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on, { prevent } from "@bake-js/element/event";
import __ from "standard/dunder";
import * as f from "standard/f";
import joinCut from "standard/joinCut";
import overload from "standard/overload";
import trait from "standard/trait";
import component from "./component";
import { email } from "./patterns";
import style from "./style";

@define("xyz-email")
@paint(component, style)
class Email extends Echo(HTMLElement) {
  #internals;
  #message;
  #value;

  get [trait.label]() {
    return "Email";
  }

  get [trait.message]() {
    return (this.#message ??= "");
  }

  get [trait.type]() {
    return "email";
  }

  get [trait.value]() {
    return (this.#value ??= "");
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
      this.#message = "Email is required";
      return this;
    }

    if (f.not.test(email, this)) {
      this.#internals.states.add("invalid");
      this.#message = "Email is not valid";
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
      event.formData.set("email", this.value),
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

  @overload(__.test__)
  [__.isEmpty__]() {
    return this[trait.value];
  }
}

export default Email;
