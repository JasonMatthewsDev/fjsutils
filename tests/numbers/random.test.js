import { random } from '../../src/numbers';

describe('numbers', () => {
  it('should be a function', () => {
    expect(random).toBeInstanceOf(Function);
  });

  it('should genrate a random integer', () => {
    expect(random(1, 10) >= 1 && random(1, 10) <= 10).toBe(true);
  });

  it('should generate a random float', () => {
    const num = random(1, 10, true);
    expect(num >= 1 && num <= 10 && num.toString().includes('.')).toBe(true);
  });
});
