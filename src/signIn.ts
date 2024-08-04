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
  @on.submit("form")
  @prevent
  [trait.submit](event) {
    console.dir(new FormData(event.target, event.submitter));
  }
}

export default SignIn;
