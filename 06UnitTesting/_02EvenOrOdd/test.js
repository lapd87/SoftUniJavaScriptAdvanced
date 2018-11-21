let expect = require("chai").expect;
const isOddOrEven = require("../_02EvenOrOdd/isOdd.js");

describe("test isOddOrEven(string)", function () {

    it('should not take num', function () {
        expect(isOddOrEven(3)).be.undefined;
    });

    it('should not take obj', function () {
        expect(isOddOrEven({})).be.undefined;
    });

    it('should not take arr', function () {
        expect(isOddOrEven([])).be.undefined;
    });

    it('should return even for empty', function () {
        expect(isOddOrEven("")).equal("even");
    });

    it('should return odd', function () {
        expect(isOddOrEven("asd")).equal("odd");
    });

    it('should return even', function () {
        expect(isOddOrEven("asda")).equal("even");
    });

});