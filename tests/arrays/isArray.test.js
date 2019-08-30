import { isArray } from '../../src/arrays';

describe('isArray', () => {
  it('should be a function', () => {
    expect(isArray).toBeInstanceOf(Function);
  });

  it('should return true if input is an array', () => {
    expect(isArray([])).toBe(true);
  });

  it('should be false if input is not an array', () => {
    expect(isArray(false)).toBe(false);
  });
});
