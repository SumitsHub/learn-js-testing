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

it('empty array', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

// .not property
it('not an error', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).not.toBeNaN();
});

// toThrow
it('error test', () => {
  const resultFn = () => {
    add(); // not passing any argument
  };

  expect(resultFn).toThrow();
});
