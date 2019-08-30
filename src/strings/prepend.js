import { concat } from '.';
import { curry } from '../functions';

const prepend = left => curry(concat)(left);

export default prepend;
