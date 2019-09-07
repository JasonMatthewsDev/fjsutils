import { any } from '../../src/arrays';

describe('any', () => {
  it('should be a function', () => {
    expect(any).toBeInstanceOf(Function);
  });

  it('should return true if the provided functions is truthy with any of the array values', () => {
    expect(any(Boolean, [false, false, true])).toBe(true);
  });
});