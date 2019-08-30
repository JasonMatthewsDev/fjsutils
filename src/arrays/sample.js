import { random } from '../numbers';

const sample = (num, array) => new Array(num)
  .fill(null)
  .map(() => array[random(0, array.length)]);

export default sample;
