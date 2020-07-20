import sinon from 'sinon';

import { debounce } from '../../src/utils';

describe('debounce', () => {
  it('should return be a function', () => {
    expect(debounce).toBeInstanceOf(Function);
  });

  it('should return a new function', () => {
    const fn = () => {};
    expect(debounce(fn, 0)).toBeInstanceOf(Function);
  });

  it('should debounce a function', async () => {
    const fn = sinon.stub();
    const debouncedFn = debounce(fn, 100);
    debouncedFn();
    debouncedFn();
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(fn.calledOnce).toBe(true);
  });

  it('should call the function immediately', async () => {
    const fn = sinon.stub();
    const debouncedFn = debounce(fn, 100, true);
    debouncedFn();
    expect(fn.calledOnce).toBe(true);
  });
});
