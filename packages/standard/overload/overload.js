const overload = (...methods) => {
  return (target, propertyKey) => {
    const defineProperty = (method) => {
      Reflect.defineProperty(target, method, {
        value() {
          return this[propertyKey](...arguments);
        },
        writable: true,
      });
    };

    methods.forEach(defineProperty);
  };
};

export default overload;
