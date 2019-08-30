const randomDecimal = (min, max) => Math.random() * (+max - +min) + +min;

const random = (min, max, allowDecimals = false) => allowDecimals
  ? randomDecimal(min, max)
  : Math.floor(randomDecimal(min, max));

export default random;
