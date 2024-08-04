const __ = new Proxy(
  {},
  {
    get(target, key) {
      return (target[key] ??= Symbol(key));
    },
  },
);

export default __;
