import { sum } from '../../src/arrays';

describe('sum', () => {
  it('should be a function', () => {
    expect(sum).toBeInstanceOf(Function);
  });

  it('should sum the numbers in an array', () => {
    const array = [1, 2, 3];
    expect(sum(array)).toBe(6);
  });
});
