import { isObject, transformObjectKeysAndValues } from '.';
import { snakeToCamel } from '../strings';
import { isArray } from '../arrays';

const convertSnakeKeysToCamel = input => (isArray(input) && input.map(convertSnakeKeysToCamel))
  || (isObject(input) && transformObjectKeysAndValues(input, snakeToCamel, convertSnakeKeysToCamel))
  || input;

export default convertSnakeKeysToCamel;
