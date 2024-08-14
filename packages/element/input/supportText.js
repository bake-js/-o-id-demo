class SupportText {
  #element;

  constructor(element) {
    this.#element = element;
  }

  set(value = "") {
    this.#element.shadowRoot
      .querySelector("span.input__supportText")
      .setAttribute("data-text", value);
    return this;
  }

  remove() {
    this.#element.shadowRoot
      .querySelector("span.input__supportText")
      .removeAttribute("data-text");
    return this;
  }

  static from(element) {
    return new SupportText(element);
  }
}

export default SupportText;
