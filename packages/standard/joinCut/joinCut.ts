const joinCut = (method) => {
  return (_target, _propertyKey, descriptor) => {
    const type = descriptor.set ? "set" : "value";
    const substituted = descriptor[type] ?? (() => undefined);

    Object.assign(descriptor, {
      async [type](...args) {
        await Reflect.apply(substituted, this, args);
        await this[method]?.(...args);
        return this;
      },
    });
  };
};

export default joinCut;
