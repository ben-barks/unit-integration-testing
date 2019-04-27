var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to perform add function', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 5);
  })

  it('should be able to perform deduct function', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3);
  })

  it('should be able to perform multiply function', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 15);
  })

  it('should be able to perform divide function', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3);
  })

  it('should be able to concatenate numbers', function(){
    calculator.numberClick(21)
    calculator.numberClick(7)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 217);
  })

  it('should be able to chain operations together', function(){
    calculator.numberClick(21)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(20)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 8);
  })

  it('should be able to chain operations together', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.clearClick()
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 12);
  })

});
