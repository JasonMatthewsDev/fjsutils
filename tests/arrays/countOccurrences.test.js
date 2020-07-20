import { countOccurrences } from '../../src/arrays';

describe('countOccurrences', () => {
  it('should be a function', () => {
    expect(countOccurrences).toBeInstanceOf(Function);
  });

  it('should count the occurences of a value in an array', () => {
    expect(countOccurrences(1, [1, 2, 3, 2, 1, 1, 2, 3, 2, 1])).toBe(4);
  });
});
