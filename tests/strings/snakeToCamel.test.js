import { snakeToCamel } from '../../src/strings';

describe('snakeToCamel', () => {
  it('should be a function', () => {
    expect(snakeToCamel).toBeInstanceOf(Function);
  });

  it('should convert a snake case string to camel case', () => {
    expect(snakeToCamel('why_are_you_whispering')).toBe('whyAreYouWhispering');
  });
});
