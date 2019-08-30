import { flatten } from '../../src/arrays';

describe('flatten', () => {
  it('should be a function', () => {
    expect(flatten).toBeInstanceOf(Function);
  });

  it('should flatten an array one level', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });
});
