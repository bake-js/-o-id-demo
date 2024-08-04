import { define, on, paint } from "@bake-js/element";
import Echo from "@bake-js/element/echo";
import trait from "standard/trait";
import component from "./component";
import style from "./style";

@define("xyz-sign-in")
@paint(component, style)
class SignIn extends Echo(HTMLElement) {
  @on.submit("form")
  [trait.submit](event) {
    event.preventDefault();
    console.dir(new FormData(event.target, event.submitter));
  }
}

export default SignIn;
