import { all } from '../../src/arrays';

describe('all', () => {
  it('should be a function', () => {
    expect(all).toBeInstanceOf(Function);
  });

  it('should test every member of an array with the provided functions', () => {
    expect(all(Boolean, [true, true, true])).toBe(true);
  });
});
