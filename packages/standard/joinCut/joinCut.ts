const joinCut = (method) => {
  return (_target, _propertyKey, descriptor) => {
    const substituted = descriptor.value ?? (() => undefined);

    Object.assign(descriptor, {
      async value() {
        await Reflect.apply(substituted, this, arguments);
        await this[method]?.();
        return this;
      },
    });
  };
};

export default joinCut;
