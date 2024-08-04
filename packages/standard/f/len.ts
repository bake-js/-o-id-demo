import __ from "standard/dunder";
import resolver from "./resolver";

const len = (value) => Object.keys(value ?? {})?.length ?? 0;

export default resolver(__.len__, len);
