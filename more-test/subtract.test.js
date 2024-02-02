const subtract = require('../files-to-test/subtract.js');

describe('unit test the subtract function', function () {
  test('subtract 1 from  3 should equal two', function () {
    const result = subtract(3, 1);
    expect(result).toEqual(2);
  });
});
