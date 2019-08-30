import curry from '../../src/functions/curry';

describe('curry', () => {
  it('should be a function', () => {
    expect(curry).toBeInstanceOf(Function);
  });

  it('should return a function', () => {
    const add = (a, b) => a + b;
    const add10 = curry(add(10));
    expect(add10).toBeInstanceOf(Function);
  });

  it('should return a value when all parameters have been supplied', () => {
    const add = (a, b) => a + b;
    const add10 = curry(add)(10);
    expect(add10(1)).toBe(11);
    expect(add10(2)).toBe(12);

    const add5 = curry(add)(5);
    expect(add5(5)).toBe(10);
    expect(add5(10)).toBe(15);
  });
});
