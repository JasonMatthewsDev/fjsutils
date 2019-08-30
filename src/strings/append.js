import { concat } from '.';
import { curryRight } from '../functions';

const append = right => curryRight(concat)(right);

export default append;
