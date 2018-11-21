let expect = require("chai").expect;
const isSymmetric = require("../_005CheckForSymmetry/isSymmetric.js");

describe("test isSymmetric(arr)", function () {
    it('should not take string', function () {
        expect(isSymmetric("invalid")).equal(false);
    });

    it('should not take num', function () {
        expect(isSymmetric(1)).equal(false);
    });

    it('should be symmetric', function () {
        expect(isSymmetric(["123","1","123"])).equal(true);
    });

    it('should be symmetric one element', function () {
        expect(isSymmetric(["123"])).equal(true);
    });

    it('should not be symmetric', function () {
        expect(isSymmetric(["123",1,"321"])).equal(false);
    });

    it('should not be symmetric', function () {
        expect(isSymmetric(["-123","1","123"])).equal(false);
    });

    it('empty to be symmetric', function () {
        expect(isSymmetric([])).equal(true);
    });

    it('should be symmetric', function () {
        expect(isSymmetric([{x:1},{x:1}])).equal(true);
    });
});