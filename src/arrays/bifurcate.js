const bifurcate = (fn, array) => array.reduce((result, item, index, src) => fn(item, index, src)
  ? [[...result[0], item], result[1]]
  : [result[0], [...result[1], item]],
[[], []]);

export default bifurcate;
