let expect = require("chai").expect;
const mathEnforcer = require("../_04MathEnforcer/mathEnforcer.js");

describe("test mathEnforcer obj", function () {

    describe("test mathEnforcer.addFive", function () {
        it('should not take string', function () {
            expect(mathEnforcer.addFive("3")).be.undefined;
        });

        it('should not take arr', function () {
            expect(mathEnforcer.addFive([3])).be.undefined;
        });

        it('should not take obj', function () {
            expect(mathEnforcer.addFive({3: 3})).be.undefined;
        });

        it('should not take zero params', function () {
            expect(mathEnforcer.addFive()).be.undefined;
        });

        it('should take int', function () {
            expect(mathEnforcer.addFive(1)).equal(6);
        });

        it('should take negative', function () {
            expect(mathEnforcer.addFive(-1)).equal(4);
        });

        it('should take floating', function () {
            expect(mathEnforcer.addFive(-1.11111111)).closeTo(3.89, 0.01);
        });
    });

    describe("test mathEnforcer.subtractTen", function () {
        it('should not take string', function () {
            expect(mathEnforcer.subtractTen("3")).be.undefined;
        });

        it('should not take arr', function () {
            expect(mathEnforcer.subtractTen([3])).be.undefined;
        });

        it('should not take obj', function () {
            expect(mathEnforcer.subtractTen({3: 3})).be.undefined;
        });

        it('should not take zero params', function () {
            expect(mathEnforcer.subtractTen()).be.undefined;
        });

        it('should take int', function () {
            expect(mathEnforcer.subtractTen(1)).equal(-9);
        });

        it('should take negative', function () {
            expect(mathEnforcer.subtractTen(-1)).equal(-11);
        });

        it('should take floating', function () {
            expect(mathEnforcer.subtractTen(1.11111111)).closeTo(-8.89, 0.01);
        });
    });

    describe("test mathEnforcer.sum", function () {
        it('should not take string', function () {
            expect(mathEnforcer.sum("3", 1)).be.undefined;
        });

        it('should not take arr', function () {
            expect(mathEnforcer.sum([3], 1)).be.undefined;
        });

        it('should not take obj', function () {
            expect(mathEnforcer.sum({3: 3}, 1)).be.undefined;
        });

        it('should not take only one param', function () {
            expect(mathEnforcer.sum(1)).be.undefined;
        });

        it('should not take zero params', function () {
            expect(mathEnforcer.sum()).be.undefined;
        });

        it('should take int', function () {
            expect(mathEnforcer.sum(1, 1)).equal(2);
        });

        it('should take negative', function () {
            expect(mathEnforcer.sum(-1, 1)).equal(0);
        });

        it('should take floating', function () {
            expect(mathEnforcer.sum(1.11111111, 0.00999999)).closeTo(1.12, 0.01);
        });

        it('should not cut decimals 1', function () {
            expect(mathEnforcer.sum(1.11111, 0)).closeTo(1.11, 0.01);
        });

        it('should not cut decimals 2', function () {
            expect(mathEnforcer.sum(0, 1.11111)).closeTo(1.11, 0.01);
        });
    });
});