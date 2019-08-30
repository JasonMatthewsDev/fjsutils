const curryRight = fn => function curried(...args) {
  return args.length >= fn.length
    ? fn(...args.reverse())
    : arg => curried(...[...args, arg]);
};

export default curryRight;
