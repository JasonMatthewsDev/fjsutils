import { removeFromObject } from '../../src/objects';

describe('removeFromObject', () => {
  it('should be a function', () => {
    expect(removeFromObject).toBeInstanceOf(Function);
  });

  it('should remove keys from an object', () => {
    const obj = {
      one: 'one',
      two: 'two',
      three: 'three',
    };

    expect(removeFromObject(({ val }) => val === 'one', obj)).toEqual({
      two: 'two',
      three: 'three',
    });
  });
});
