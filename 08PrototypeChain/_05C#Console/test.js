let expect = require("chai").expect;

let Console = require("../_05C#Console/specialConsole.js").Console;

describe("test specialConsole", function () {

    describe("test single parameter", function () {
        it('string should be returned', function () {
            expect(Console.writeLine("asd")).equal("asd");
        });

        it('object should be JSON', function () {
            expect(Console.writeLine({name: "John", age: 30, city: "New York"}))
                .equal('{"name":"John","age":30,"city":"New York"}');
        });
    });

    describe("test multiple parameters", function () {
        it('first not string should be error', function () {
            expect(() => Console.writeLine(10, "asd"))
                .throw(TypeError);
        });

        it('placeholders count not matching should be error', function () {
            expect(() => Console.writeLine("{0} asd {1}", 10))
                .throw(RangeError);
        });

        it('placeholders count not matching should be error', function () {
            expect(() => Console.writeLine("{0} asd {0}", 10))
                .throw(RangeError);
        });

        it('placeholders range not matching should be error', function () {
            expect(() => Console.writeLine("{1} asd", "10"))
                .throw(RangeError);
        });

        it('placeholders range not matching should be error', function () {
            expect(() => Console.writeLine("{1} asd {0}", "10", "asd", "ddd"))
                .throw(RangeError);
        });

        it('placeholders multiple digit not matching should be error', function () {
            expect(() => Console.writeLine("{11111} asd {0}", "10"))
                .throw(RangeError);
        });

        it('placeholders should be replaced', function () {
            expect(Console.writeLine("{1} asd {0}", "10", "asd"))
                .equal("asd asd 10");
        });
    });
});