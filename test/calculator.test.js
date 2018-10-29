const calculator = require("../src/calculator");

describe('calculator', () => {
  const calc = calculator();
  test('adds 1 + 2 to equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test('adds -1 + -2 to equal -3', () => {
    expect(calc.add(-1, -2)).toBe(-3);
  });
  test('adds -1 + 2 to equal 1', () => {
    expect(calc.add(-1, 2)).toBe(1);
  });

  test('adds 1 - 2 to equal 3', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });
  test('adds -1 - -2 to equal 3', () => {
    expect(calc.subtract(-1, -2)).toBe(1);
  });
  test('adds -1 - 2 to equal 3', () => {
    expect(calc.subtract(-1, 2)).toBe(-3);
  });

  test('adds 1 * 2 to equal 3', () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });
  test('adds -1 * -2 to equal 3', () => {
    expect(calc.multiply(-1, -2)).toBe(2);
  });
  test('adds -1 * 2 to equal 3', () => {
    expect(calc.multiply(-1, 2)).toBe(-2);
  });

  test('adds 1 / 2 to equal 3', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });
  test('adds -1 / -2 to equal 3', () => {
    expect(calc.divide(-1, -2)).toBe(0.5);
  });
  test('adds -1 / 2 to equal 3', () => {
    expect(calc.divide(-1, 2)).toBe(-0.5);
  });
});
