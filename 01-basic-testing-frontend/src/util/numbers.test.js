import { describe, expect, it, test } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  test('string number to number', () => {
    const input = '12';
    const result = transformToNumber(input);

    expect(result).toBeTypeOf('number');
  });

  test('yeild NaN', () => {
    const input = 'something';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return array of number values', () => {
    const numbers = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numbers);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error for invalid string', () => {
    const numbers = ['', 1];

    const cleanFn = () => cleanNumbers(numbers);

    expect(cleanFn).toThrowError();
  });
});
