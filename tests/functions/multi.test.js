import { multi } from '../../src/functions';

describe('multi', () => {
  it('should be a function', () => {
    expect(multi).toBeInstanceOf(Function);
  });

  it('should return multiple values as an array', () => {
    const maxMin = multi(Math.max, Math.min);
    expect(maxMin(...[...Array(501).keys()])).toEqual([500, 0]);
  });
});
