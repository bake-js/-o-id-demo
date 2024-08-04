import __ from "standard/dunder";
import resolver from "./resolver";

const equals = (x, y) => x === y;

export default resolver(__.equals__, equals);
