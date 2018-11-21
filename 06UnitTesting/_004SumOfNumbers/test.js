let expect = require("chai").expect;
const sum = require("../_004SumOfNumbers/sum.js");

describe("test sum(arr)", function () {
    it('should take arr of nums', function () {
        expect(sum(["invalid"])).be.NaN;
    });

    it('should return 0 for empty ', function () {
        expect(sum([])).equal(0);
    });

    it('should take nums as string', function () {
        expect(sum(["1", 2])).equal(3);
    });
});