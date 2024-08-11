const joinCut = (method) => {
  return (_target, _propertyKey, descriptor) => {
    const substituted = descriptor.value ?? (() => undefined);

    Object.assign(descriptor, {
      async value(...args) {
        await Reflect.apply(substituted, this, args);
        await this[method]?.(...args);
        return this;
      },
    });
  };
};

export default joinCut;
