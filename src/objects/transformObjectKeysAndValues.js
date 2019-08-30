import { identity } from '../functions';

const transformObjectKeysAndValues = (
  obj,
  keyTransform = identity,
  valTransform = identity
) => Object.keys(obj).reduce(
  (newObj, key) => ({
    ...newObj,
    [keyTransform(key)]: valTransform(obj[key])
  }),
  {}
);

export default transformObjectKeysAndValues;
