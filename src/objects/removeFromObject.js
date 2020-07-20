const removeFromObject = (comparator, obj) => Object.keys(obj).reduce((newObj, key) => ({
  ...newObj,
  ...(!comparator({ key, val: obj[key] }) && { [key]: obj[key] })
}), {});

export default removeFromObject;
