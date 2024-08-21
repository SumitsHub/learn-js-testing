import { expect, test } from 'vitest';
import { transformToNumber } from './numbers';

test('string number to number', () => {
  const input = '12';
  const result = transformToNumber(input);

  expect(result).toBeTypeOf('number');
});

test('yield NaN', () => {
  const input = 'something';
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
