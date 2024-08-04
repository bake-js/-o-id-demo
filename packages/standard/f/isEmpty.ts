import __ from "standard/dunder";
import isNil from "./isNil";
import len from "./len";
import not from "./not";
import resolver from "./resolver";

const isEmpty = (value) => isNil(value) || not(len(value));

export default resolver(__.isEmpty__, isEmpty);
