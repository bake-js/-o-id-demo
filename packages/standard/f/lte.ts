import __ from "standard/dunder";
import resolver from "./resolver";

const lte = (x, y) => x <= y;

export default resolver(__.lte__, lte);
