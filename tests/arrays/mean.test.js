import { mean } from '../../src/arrays';

describe('mean', () => {
  it('should be a function', () => {
    expect(mean).toBeInstanceOf(Function);
  });

  it('should calculate the mean of an array of numbers', () => {
    const array = [1, 2, 3];
    expect(mean(array)).toEqual(2);
  });
});
