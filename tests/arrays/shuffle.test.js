import { shuffle } from '../../src/arrays';

describe('shuffle', () => {
  it('should be a function', () => {
    expect(shuffle).toBeInstanceOf(Function);
  });

  it('should randomize the order of an array', () => {
    const array = [...Array(1000).keys()];
    expect(shuffle(array)).not.toEqual(array);
    expect(array).toEqual([...Array(1000).keys()]);
  });
});
