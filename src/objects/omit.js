import { removeFromObject } from ".";

const omit = (omission, obj) => removeFromObject(({ key }) => omission.includes(key), obj);

export default omit;