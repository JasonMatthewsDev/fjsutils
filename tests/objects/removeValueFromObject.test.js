import { removeValueFromObject } from '../../src/objects';

describe('removeValueFromObject', () => {
  it('should be a function', () => {
    expect(removeValueFromObject).toBeInstanceOf(Function);
  });

  it('should remove any keys with a given value from an object', () => {
    const testObj = {
      one: 'one',
      two: 'foo',
      three: 'three',
      four: 'foo',
      five: 'five',
    };

    expect(removeValueFromObject('foo', testObj)).toEqual({
      one: 'one',
      three: 'three',
      five: 'five',
    });
  });
});
