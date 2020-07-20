import { isArray } from '../arrays';

const isObject = input => input === Object(input)
  && !isArray(input)
  && typeof input !== 'function'
  && !(input instanceof Date);

export default isObject;
