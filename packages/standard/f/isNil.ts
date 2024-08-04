import __ from "standard/dunder";
import resolver from "./resolver";

const isNil = (value) => value === null || value === undefined;

export default resolver(__.isNil__, isNil);
