const add = require('./add.js');

describe('unit test the add function', function () {
  it('add one plus two should equal three', function () {
    const result = add(2, 2);
    expect(result).toEqual(3);
  });
});
