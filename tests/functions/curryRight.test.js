import curryRight from '../../src/functions/curryRight';

describe('curryRight', () => {
  it('should be a function', () => {
    expect(curryRight).toBeInstanceOf(Function);
  });

  it('should return a function', () => {
    const add = (a, b) => a + b;
    const add10 = curryRight(add(10));
    expect(add10).toBeInstanceOf(Function);
  });

  it('should return a value when all parameters have been supplied', () => {
    const add = (a, b) => a + b;
    const add10 = curryRight(add)(10);
    expect(add10(1)).toBe(11);
    expect(add10(2)).toBe(12);

    const add5 = curryRight(add)(5);
    expect(add5(5)).toBe(10);
    expect(add5(10)).toBe(15);
  });

  it('should work with 3 parameters', () => {
    const combineThree = (one, two, three) => `${one}${two}${three}`;
    const curriedRightCombineThree = curryRight(combineThree);
    const one = curriedRightCombineThree('one');
    const two = one('two');
    const three = two('three');
    expect(three).toBe('threetwoone');
  });
});
