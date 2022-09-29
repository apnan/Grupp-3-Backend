/**
 * @group unit
 */
class dummyTest {
  constructor(numbers) {
    this.numbers = numbers;
  }

  add(numbers) {
    return numbers
      .split(',')
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b);
  }
}

const dummyComponentTest = new dummyTest();

test('dummyComponentTest should add!', () => {
  expect(dummyComponentTest.add('1')).toBe(1);
});

test('dummyComponentTest should add!', () => {
  expect(dummyComponentTest.add('3,3')).toBe(6);
});
