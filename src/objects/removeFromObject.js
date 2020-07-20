const removeFromObject = (comparator, obj) => Object.keys(obj).reduce((newObj, key) => {
  if (!comparator({ key, val: obj[key] })) newObj[key] = obj[key];
  return newObj;
}, {});

export default removeFromObject;
