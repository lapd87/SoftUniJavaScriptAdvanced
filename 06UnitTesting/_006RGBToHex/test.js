let expect = require("chai").expect;
const rgbToHexColor = require("../_006RGBToHex/rgb-to-hex.js");

describe("test rgbToHexColor(a,b,c)", function () {

    it('should not take string 3', function () {
        expect(rgbToHexColor(1, 2, "3")).be.undefined;
    });


    it('should not take string 2', function () {
        expect(rgbToHexColor(1, "2", 3)).be.undefined;
    });

    it('should not take string 1', function () {
        expect(rgbToHexColor("1", 2, 3)).be.undefined;
    });

    it('should not take arr', function () {
        expect(rgbToHexColor([1, 2, 3])).be.undefined;
    });

    it('should not take obj 1', function () {
        expect(rgbToHexColor({x: 1}, 2, 3)).be.undefined;
    });

    it('should not take obj 2', function () {
        expect(rgbToHexColor(1, {x: 1}, 3)).be.undefined;
    });

    it('should not take obj 3', function () {
        expect(rgbToHexColor(1, 1, {x: 1})).be.undefined;
    });

    it('should not be in range smaller 1', function () {
        expect(rgbToHexColor(-1, 2, 3)).be.undefined;
    });

    it('should not be in range smaller 2', function () {
        expect(rgbToHexColor(1, -1, 3)).be.undefined;
    });

    it('should not be in range smaller 3', function () {
        expect(rgbToHexColor(1, 2, -1)).be.undefined;
    });

    it('should not be in range bigger 1', function () {
        expect(rgbToHexColor(256, 2, 3)).be.undefined;
    });

    it('should not be in range bigger 2', function () {
        expect(rgbToHexColor(255, 256, 3)).be.undefined;
    });

    it('should not be in range bigger 3', function () {
        expect(rgbToHexColor(255, 255, 256)).be.undefined;
    });

    it('should return correct', function () {
        expect(rgbToHexColor(255, 255, 255)).equal("#FFFFFF");
    });

    it('should return correct', function () {
        expect(rgbToHexColor(0,0,0)).equal("#000000");
    });

    it('should return correct', function () {
        expect(rgbToHexColor(0,125,251)).equal("#007DFB");
    });
});