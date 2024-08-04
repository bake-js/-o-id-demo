import __ from "standard/dunder";
import resolver from "./resolver";

const lt = (x, y) => x < y;

export default resolver(__.lt__, lt);
