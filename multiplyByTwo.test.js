const multiplyByTwo = require('./files-to-test/multiplyByTwo.js');
console.log(multiplyByTwo);

describe('unit test the multiply by two function', function () {
  it('multiply one times two should equal two', function () {
    const result = multiplyByTwo(1, 2);
    expect(result).toEqual(2);
  });
});
