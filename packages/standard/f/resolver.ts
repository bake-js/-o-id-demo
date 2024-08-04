const resolver =
  (dunder, functionRef) =>
  (...args) =>
    functionRef(...args.map((x) => (x?.[dunder] ? x?.[dunder]() : x)));

export default resolver;
