import { memoize } from '../../src/functions';

describe('memoize', () => {
  it('should be a function', () => {
    expect(memoize).toBeInstanceOf(Function);
  });

  it('should return a new function', () => {
    const fn = (one, two) => `${one}${two}`;
  
    expect(memoize(fn)).toBeInstanceOf(Function);
  });

  it('should return a function that has the same output as the original function', () => {
    const fn = (one, two) => `${one}${two}`;
    const memoizedFn = memoize(fn);

    expect(memoizedFn('foo', 'bar')).toBe('foobar');
  });
});