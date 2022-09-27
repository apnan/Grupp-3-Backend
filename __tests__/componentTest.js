/**
 * @group component
 */

const calculator = require('../calculator.js');

test('Calculator should add!', () => {
  expect(calculator.add('1')).toBe(1);
});

test('Calculator should add!', () => {
  expect(calculator.add('3,3')).toBe(6);
});
