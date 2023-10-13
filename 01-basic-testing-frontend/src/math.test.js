import { expect, it } from 'vitest';
import { add } from './math';

it('should sum all number values in array', () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, currValue) => prevValue + currValue
  );
  expect(result).toBe(expectedResult);
});

it('should yield NaN', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});
