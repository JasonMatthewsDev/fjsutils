import { removeFromObject } from '.';
import { isArray } from '../arrays';

const omitByArray = (omission, obj) => removeFromObject(({ key }) => omission.includes(key), obj);
const omitByString = (omission, obj) => removeFromObject(({ key }) => key === omission, obj);

const omit = (omission, obj) => {
  return (isArray(omission) && omitByArray(omission, obj)) || omitByString(omission, obj);
};

export default omit;
