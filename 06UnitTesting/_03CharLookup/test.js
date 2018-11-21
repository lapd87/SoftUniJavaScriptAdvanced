let expect = require("chai").expect;
const lookupChar = require("../_03CharLookup/lookupChar.js");

describe("test lookupChar(string,index)", function () {

    it('should not take string 2', function () {
        expect(lookupChar("", "3")).be.undefined;
    });

    it('should not take num 1', function () {
        expect(lookupChar(12, 1)).be.undefined;
    });

    it('should not take floating 2', function () {
        expect(lookupChar("", 1.5)).be.undefined;
    });

    it('should not take obj 1', function () {
        expect(lookupChar({}, 0)).be.undefined;
    });

    it('should not take arr 1', function () {
        expect(lookupChar([], 0)).be.undefined;
    });

    it('should not take obj 2', function () {
        expect(lookupChar("", {})).be.undefined;
    });

    it('should not take arr 2', function () {
        expect(lookupChar("", [])).be.undefined;
    });

    it('should not take smaller 2', function () {
        expect(lookupChar("asd", -1)).equal("Incorrect index");
    });

    it('should not take bigger 2', function () {
        expect(lookupChar("asd", 3)).equal("Incorrect index");
    });

    it('should return correct', function () {
        expect(lookupChar("asd", 0)).equal("a");
    });

    it('should return correct', function () {
        expect(lookupChar("asd", 1)).equal("s");
    });

    it('should return correct', function () {
        expect(lookupChar("asd", 2)).equal("d");
    });

    it('should return correct', function () {
        expect(lookupChar("asd asd", 3)).equal(" ");
    });

});