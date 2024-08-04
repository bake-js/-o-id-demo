import { define } from "@bake-js/element";
import { paint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import on, { prevent } from "@bake-js/element/event";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("xyz-sign-in")
@paint(component, style)
class SignIn extends Echo(HTMLElement) {
  @on.cancel("form")
  [trait.cancel]() {
    this.dispatchEvent(new CustomEvent("canceled"));
    return this;
  }

  @on.submit("form")
  @prevent
  [trait.submit](event) {
    const detail = Object.fromEntries(
      new FormData(event.target, event.submitter),
    );
    this.dispatchEvent(new CustomEvent("submited", { detail }));
    return this;
  }
}

export default SignIn;
