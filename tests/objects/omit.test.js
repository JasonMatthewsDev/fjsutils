import { omit } from '../../src/objects';

describe('omit', () => {
  it('should be a function', () => {
    expect(omit).toBeInstanceOf(Function);
  });

  it('should remove keys from an object', () => {
    const obj = {
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
      five: 'five',
    };

    expect(omit(['two', 'four'], obj)).toEqual({
      one: 'one',
      three: 'three',
      five: 'five',
    });
  });
});