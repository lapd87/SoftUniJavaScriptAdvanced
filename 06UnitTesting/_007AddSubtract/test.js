let expect = require("chai").expect;
const createCalculator = require("../_007AddSubtract/createCalculator.js");

describe("test createCalculator()", function () {

    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it('should get', function () {
        expect(calc.get()).equal(0);
    });

    it('should add', function () {
        calc.add(1);
        expect(calc.get()).equal(1);
    });

    it('should subtract', function () {
        calc.subtract(1);
        expect(calc.get()).equal(-1);
    });

    it('should add string', function () {
        calc.add("1");
        expect(calc.get()).equal(1);
    });

    it('should subtract string', function () {
        calc.subtract("1");
        expect(calc.get()).equal(-1);
    });

    it('should add string', function () {
        calc.add("a");
        expect(calc.get()).be.NaN;
    });

    it('should subtract string', function () {
        calc.subtract("a");
        expect(calc.get()).be.NaN;
    });

});