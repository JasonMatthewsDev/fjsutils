const multi = (...fns) => (...args) => fns.map(fn => fn(...args));

export default multi;
