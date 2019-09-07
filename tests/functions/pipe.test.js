import { pipe } from '../../src/functions';
import { append, prepend } from '../../src/strings';

describe('pipe', () => {
  it('should be a function', () => {
    expect(pipe).toBeInstanceOf(Function);
  });

  it('should pipe output from one function to the next', () => {
    const prependFoo = prepend('foo ');
    const appendBar = append(' bar');
    const fooFooBar = pipe(prependFoo, appendBar, prependFoo);
    expect(fooFooBar('I\'m batman')).toBe('foo foo I\'m batman bar');
  });
});