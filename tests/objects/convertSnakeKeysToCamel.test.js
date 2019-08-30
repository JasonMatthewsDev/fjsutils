import { convertSnakeKeysToCamel } from '../../src/objects';

describe('convertSnakeKeysToCamel', () => {
  it('should be a function', () => {
    expect(convertSnakeKeysToCamel).toBeInstanceOf(Function);
  });

  it('should convert snake cased keys to camel cased keys in an object', () => {
    expect(convertSnakeKeysToCamel({
      snake_case: 'snek',
      foo: [{ bar_baz: 'something' }, { lorem_ipsum: 'latin' }],
      obj: { snake_key_again: 'right_here' },
    })).toEqual({
      snakeCase: 'snek',
      foo: [{ barBaz: 'something' }, { loremIpsum: 'latin' }],
      obj: { snakeKeyAgain: 'right_here' },
    });
  });
});
