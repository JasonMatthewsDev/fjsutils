import { getProp } from '../../src/arrays';

describe('getProp', () => {
  it('should be a function', () => {
    expect(getProp).toBeInstanceOf(Function);
  });

  it('should return an array of values from an array of objects', () => {
    const array = [{
      foo: 'foo1',
      bar: 'bar1',
    }, {
      foo: 'foo2',
      bar: 'bar2',
    }, {
      foo: 'foo3',
      bar: 'bar3',
    }];

    expect(getProp('foo', array)).toEqual(['foo1', 'foo2', 'foo3']);
  });
});
