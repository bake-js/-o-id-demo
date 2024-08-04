import __ from "standard/dunder";
import resolver from "./resolver";

const is = (target, klass) =>
  target.constructor === klass || target instanceof klass;

export default resolver(__.is__, is);
