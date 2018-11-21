let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

let sharedObject = require("../_05SharedObject/shared-object.js");

describe("test sharedObject obj", function () {
    beforeEach(() => {
        global.$ = $;
    });

    describe("test sharedObject default", function () {
        it('name should be null', function () {
            expect(sharedObject.name).be.null;
        });

        it('income should be null', function () {
            expect(sharedObject.income).be.null;
        });
    });

    describe("test sharedObject.changeName", function () {
        it('name should not be changed empty string', function () {
            sharedObject.changeName("");
            expect(sharedObject.name).be.null;
        });

        it('name should be changed obj', function () {
            sharedObject.changeName("as");
            expect(sharedObject.name).equal("as");
        });

        it('name should be changed html', function () {
            sharedObject.changeName("as");
            expect($("#name").val()).equal("as");
        });
    });

    describe("test sharedObject.changeIncome", function () {
        it('income should not be changed string', function () {
            sharedObject.changeIncome("5");
            expect(sharedObject.income).be.null;
        });

        it('income should not be changed negative', function () {
            sharedObject.changeIncome(-1);
            expect(sharedObject.income).be.null;
        });

        it('income should not be changed 0', function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).be.null;
        });

        it('income should not be changed floating', function () {
            sharedObject.changeIncome(1.1);
            expect(sharedObject.income).be.null;
        });

        it('income should be changed', function () {
            sharedObject.changeIncome(1);
            expect(sharedObject.income).equal(1);
        });

        it('income should be changed', function () {
            sharedObject.changeIncome(1);
            expect($("#income").val()).equal("1");
        });
    });

    describe("test sharedObject.updateName", function () {
        it('name should not be changed empty string', function () {
            sharedObject.changeName("as");
            $("#name").val("");
            sharedObject.updateName();
            expect(sharedObject.name).equal("as");
        });

        it('name should be changed', function () {
            $("#name").val("asd");
            sharedObject.updateName();
            expect(sharedObject.name).equal("asd");
        });
    });

    describe("test sharedObject.updateIncome", function () {
        it('income should not be changed unparsable string', function () {
            sharedObject.changeIncome(1);
            $("#income").val("a");
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(1);
        });

        it('income should not be changed negative', function () {
            sharedObject.changeIncome(1);
            $("#income").val("-1");
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(1);
        });

        it('income should not be changed 0', function () {
            sharedObject.changeIncome(1);
            $("#income").val("0");
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(1);
        });

        it('income should not be changed floating', function () {
            sharedObject.changeIncome(1);
            $("#income").val("2.1");
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(1);
        });

        it('income should be changed', function () {
            sharedObject.changeIncome(1);
            $("#income").val("2");
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(2);
        });
    });
});