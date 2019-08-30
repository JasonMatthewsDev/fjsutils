import { sample } from '../../src/arrays';

describe('sample', () => {
  it('should be a function', () => {
    expect(sample).toBeInstanceOf(Function);
  });

  it('should return random values from an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const oneSample = sample(1, array);
    const twoSample = sample(2, array);
    const threeSample = sample(3, array);
    expect(oneSample.length).toBe(1);
    expect(twoSample.length).toBe(2);
    expect(threeSample.length).toBe(3);
    expect(oneSample.every(i => array.includes(i))).toBe(true);
    expect(twoSample.every(i => array.includes(i))).toBe(true);
    expect(threeSample.every(i => array.includes(i))).toBe(true);
  });
});
