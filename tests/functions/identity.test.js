import { identity } from '../../src/functions';

describe('identity', () => {
  it('should be a function', () => {
    expect(identity).toBeInstanceOf(Function);
  });

  it('should return the input', () => {
    expect(identity('foo')).toBe('foo');
  });
});
