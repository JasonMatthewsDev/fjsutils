import { removeFromObject } from ".";

const removeValueFromObject = (findVal, obj) =>
  removeFromObject(({ val }) => val === findVal, obj);

export default removeValueFromObject;
