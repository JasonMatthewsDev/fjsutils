import append from '../../src/strings/append';

describe('append', () => {
  it('should be a function', () => {
    expect(append).toBeInstanceOf(Function);
  });

  it('should return a function', () => {
    const appendStr = append('str');
    expect(appendStr).toBeInstanceOf(Function);
  });

  it('should append a string', () => {
    const appendRight = append('right');
    expect(appendRight('left')).toBe('leftright');
  });
});
