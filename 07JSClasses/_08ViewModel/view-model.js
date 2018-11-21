class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(this.selector);

        let that = this;
        this._elements.on('input change', function () {
            that.value = $(this).val();
        });
    }

    set value(newValue) {
        this.elements.val(newValue);
    }

    get value() {
        return this.elements.val();
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function () {
    console.log(textbox.value);
});
