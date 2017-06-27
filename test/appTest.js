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


const app = require('../app');
const sayHelloResult = app.sayHello()
const addNumbersResult = app.addNumbers(5,5)

describe('App', function() {
  describe('sayHello()', function() {
    it('sayHello should return hello', function() {
      assert.equal(sayHelloResult, 'hello');
    });
    it('sayHello should return type string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });
  describe('addNumbers()', function() {
    it('addNumbers should be greater than 5', function() {
      assert.isAbove(addNumbersResult, 5);
    })
    it('addNumbers should return type number', function() {
      assert.typeOf(addNumbersResult, 'number');
    });
  });
})

/*
if function in app.js isn't stored as a method

const sayHelloResult = app.sayHello()
describe('App', function() {
  it('sayHello should return hello', function() {
    assert.equal(sayHelloResult, 'hello');
  });
*/
