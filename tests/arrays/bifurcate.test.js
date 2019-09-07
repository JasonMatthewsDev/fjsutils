import { bifurcate } from '../../src/arrays';

describe('bifurcate', () => {
  it('should be a function', () => {
    expect(bifurcate).toBeInstanceOf(Function);
  });

  it('should return an array of results separated by the result of the function supplied', () => {
    const array = [true, 0, 'str', false, {}, ''];
    expect(bifurcate(Boolean, array)).toEqual([[true, 'str', {}], [0, false, '']]);
  });
});