import { transformObjectKeysAndValues } from '../../src/objects';

describe('transformObjectKeysAndValues', () => {
  it('should be a function', () => {
    expect(transformObjectKeysAndValues).toBeInstanceOf(Function);
  });

  it('should transform an objects keys and values', () => {
    const obj = {
      left1: 'left1',
      left2: 'left2',
    };
    const keyTrans = key => `${key}right`;
    const valTrans = val => `${val}right`;

    expect(transformObjectKeysAndValues(obj, keyTrans, valTrans)).toEqual({
      left1right: 'left1right',
      left2right: 'left2right',
    });
  });

  it('should use identity functions for default transformations', () => {
    const obj = {
      left1: 'left1',
      left2: 'left2',
    };

    expect(transformObjectKeysAndValues(obj)).toEqual({
      left1: 'left1',
      left2: 'left2',
    });
  });
});
