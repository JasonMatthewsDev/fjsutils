import { chunk } from '../../src/arrays';

describe('chunk', () => {
  it('should be a function', () => {
    expect(chunk).toBeInstanceOf(Function);
  });

  it('should chunk an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    expect(chunk(3, array)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]);
  });
});
