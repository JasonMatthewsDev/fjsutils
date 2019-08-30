import { median } from '../../src/arrays';

describe('median', () => {
  it('should be a function', () => {
    expect(median).toBeInstanceOf(Function);
  });

  it('should get the median of an odd length array of numbers', () => {
    const array = [7, 4, 9, 1, 5];
    expect(median(array)).toBe(5);
  });

  it('should get the median of an even length array of numbers', () => {
    const array = [7, 4, 9, 1, 5, 6];
    expect(median(array)).toBe(5.5);
  });
})