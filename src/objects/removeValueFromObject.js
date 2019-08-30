const removeValueFromObject = (val, obj) => Object.keys(obj).reduce((newObj, key) => ({
  ...newObj,
  ...(obj[key] !== val && { [key]: obj[key] }),
}), {});

export default removeValueFromObject;
