const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function() {
  it('sayHello should return hello', function() {
    let result = sayHello()
    assert.equal(result, 'hello');
  });


  it('sayHello should return type string', function() {
    let result = sayHello()
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be above 5', function() {
    let result = addNumbers(5,5);
    assert.isAbove(result, 5);
  });

  it('addNumbers should return type number', function() {
    let result = addNumbers(5,5);
    assert.typeOf(result, 'number');
  });
});

/*
if function in app.js isn't stored as a method
describe('App', function() {
  it('sayHello should return hello', function() {
    assert.equal(app(), 'hello');
  });
*/
