import { wait } from '../../src/utils';

describe('wait', () => {
  it('should be a function', () => {
    expect(wait).toBeInstanceOf(Function);
  });

  it('should wait for specified duration', async () => {
    const start = new Date();
    await wait(100);
    const end = new Date();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });
});
