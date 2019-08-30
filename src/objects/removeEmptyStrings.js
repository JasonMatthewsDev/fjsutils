import removeValueFromObject from './removeValueFromObject';
import { curry } from '../functions';

const removeEmptyStrings = curry(removeValueFromObject)('');

export default removeEmptyStrings;
