import __ from "standard/dunder";
import * as f from ".";
import resolver from "./resolver";

const not = resolver(__.not__, (value) => !value);

const proxy = new Proxy(not, {
  get(_target, key) {
    return (...args) => not(f[key](...args));
  },
});

export default proxy;
