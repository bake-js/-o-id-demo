import { define } from "@bake-js/element";
import { paint } from "@bake-js/element/dom";
import Echo from "@bake-js/element/echo";
import component from "./component";
import style from "./style";

@define("xyz-invite")
@paint(component, style)
class AddInvite extends Echo(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default AddInvite;
