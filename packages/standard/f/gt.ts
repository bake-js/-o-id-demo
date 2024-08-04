import __ from "standard/dunder";
import resolver from "./resolver";

const gt = (x, y) => x > y;

export default resolver(__.gt__, gt);
