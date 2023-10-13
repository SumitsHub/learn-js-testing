import { expect, it } from 'vitest';
import { add } from './math';

it('should sum all number values in array', () => {
  const result = add([1, 2, 3]);

  expect(result).toBe(6);
});
