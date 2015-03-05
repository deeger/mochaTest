var expect = require('expect');
var math = require('./math.js');

describe('adder', function () {
    it('should add two arguments', function () {
        expect(math.adder(2,9)).toBe(11);
    });

    it('should be a number', function () {
        expect(math.adder(3,7)).toBeA('number');
    });

})

describe('multiplier', function () {
    it('should add multiply arguments', function () {
        expect(math.multiplier(3,4)).toBe(12);
    });

    it('should be a number', function () {
        expect(math.multiplier(5,29)).toBeA('number');
    });

})
