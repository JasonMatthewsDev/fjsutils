import concat from '../../src/strings/concat';

describe('concat', () => {
  it('should be a function', () => {
    expect(concat).toBeInstanceOf(Function);
  });

  it('should concat strings', () => {
    expect(concat('one', 'two')).toBe('onetwo');
  });
});
