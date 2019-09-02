import { omit } from '../../src/objects';

describe('omit', () => {
  it('should be a function', () => {
    expect(omit).toBeInstanceOf(Function);
  });

  it('should remove an array of keys from an object', () => {
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

  it('should omit a single key by string', () => {
    const obj = {
      one: 1,
      two: 2,
      three: 3,
    };
  
    expect(omit('one', obj)).toEqual({ two: 2, three: 3});
  });
});