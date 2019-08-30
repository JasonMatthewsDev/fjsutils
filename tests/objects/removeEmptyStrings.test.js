import removeEmptyStrings from '../../src/objects/removeEmptyStrings';

describe('removeEmptyStrings', () => {
  it('should be a function', () => {
    expect(removeEmptyStrings).toBeInstanceOf(Function);
  });

  it('should remove keys from an object that contain empty strings', () => {
    const testObj = {
      one: 'one',
      two: '',
      three: 'three',
      four: '',
      five: 'five',
    };

    expect(removeEmptyStrings(testObj)).toEqual({
      one: 'one',
      three: 'three',
      five: 'five',
    });
  });
});
