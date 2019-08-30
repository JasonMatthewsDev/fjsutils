const curry = fn => function curried(...args) {
  return args.length >= fn.length
    ? fn(...args)
    : (arg) => curried(...[...args, arg]);
};

export default curry;
