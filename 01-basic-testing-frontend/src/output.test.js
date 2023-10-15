import { describe, expect, it } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return string, no matter what value passed in', () => {
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('valid one', () => {
    const value = 5;

    const result = generateResultText(value);

    expect(result).toContain(result.toString());
  });

  it('should return empty string', () => {
    const value = 'no-calc';

    const result = generateResultText(value);

    expect(result).toBe('');
  });
});
