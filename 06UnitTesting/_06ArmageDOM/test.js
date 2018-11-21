let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;

let nuke = require("../_06ArmageDOM/armagedom.js");

describe("test nuke func", function () {
    beforeEach(() => {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        global.$ = $;
    });

    describe("test nuke selectors arguments", function () {

        it('selector 1 should be jquery not string', function () {
            let htmlBefore = $("body").html();
            nuke("1", ".inside");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 1 should be jquery not num', function () {
            let htmlBefore = $("body").html();
            nuke(1, ".inside");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 1 should be jquery not obj', function () {
            let htmlBefore = $("body").html();
            nuke({target: "#target"}, ".inside");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 1 should be jquery not arr', function () {
            let htmlBefore = $("body").html();
            nuke(["#target"], ".inside");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 2 should be jquery not string', function () {
            let htmlBefore = $("body").html();
            nuke(".inside", "1");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 2 should be jquery not num', function () {
            let htmlBefore = $("body").html();
            nuke(".inside", 1);
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 2 should be jquery not obj', function () {
            let htmlBefore = $("body").html();
            nuke(".inside", {target: "#target"},);
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 2 should be jquery not arr', function () {
            let htmlBefore = $("body").html();
            nuke(".inside", ["#target"]);
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });
    });


    describe("test nuke selectors exist or valid", function () {

        it('selector 1 should not be invalid', function () {
            let htmlBefore = $("body").html();
            nuke("#target11", ".inside");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selector 2 should not be invalid', function () {
            let htmlBefore = $("body").html();
            nuke(".inside", "#target22");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });

        it('selectors should not be the same', function () {
            let htmlBefore = $("body").html();
            nuke("#target", "#target");
            let htmlAfter = $("body").html();
            expect(htmlAfter).equal(htmlBefore);
        });
    });

    describe("test nuke correct remove", function () {
        it('div remove class', function () {
            let divsBefore = $("div").length;
            nuke("div", ".inside");
            let divsAfter = $("div").length;
            expect(divsAfter).equal(divsBefore - 1);
        });

        it('span remove class', function () {
            let spansBefore = $("span").length;
            nuke("span", ".nested");
            let spansAfter = $("span").length;
            expect(spansAfter).equal(spansBefore - 1);
        });

        it('class remove class', function () {
            let spansBefore = $("span").length;
            nuke(".nested", ".target");
            let spansAfter = $("span").length;
            expect(spansAfter).equal(spansBefore);
        });
    });
});