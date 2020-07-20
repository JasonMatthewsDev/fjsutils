const pipe = (...fns) => fns.reduce((outer, inner) => (...args) => outer(inner(...args)));

export default pipe;
