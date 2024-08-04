import __ from "standard/dunder";
import resolver from "./resolver";

const test = (pattern, value) => pattern.test(value);

export default resolver(__.test__, test);
