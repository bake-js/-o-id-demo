import __ from "standard/dunder";
import resolver from "./resolver";

const or = (x, y) => x || y;

export default resolver(__.or__, or);
