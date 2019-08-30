import prepend from '../../src/strings/prepend';

describe('prepend', () => {
  it('should be a function', () => {
    expect(prepend).toBeInstanceOf(Function);
  });

  it('should return a function', () => {
    const prependStr = prepend('str');
    expect(prependStr).toBeInstanceOf(Function);
  });

  it('should prepend a string', () => {
    const prependLeft = prepend('left');
    expect(prependLeft('right')).toBe('leftright');
  });
});
