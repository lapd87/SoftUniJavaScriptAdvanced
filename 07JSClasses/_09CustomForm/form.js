let result = (function () {

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

    class Form {
        constructor(...textboxObjs) {
            if (textboxObjs.some(e => !(e instanceof Textbox))) {
                throw new Error();
            }

            this._element = $("<div>").addClass("form");
            this._textboxes = textboxObjs;

            for (let textboxObj of textboxObjs) {
                this._element.append($(textboxObj.selector));
            }
        }

        submit() {
            let isAllValid = true;
            for (let textboxObj of this._textboxes) {
                if (textboxObj.isValid()) {
                    $(textboxObj.selector).css("border", "2px solid green");
                } else {
                    isAllValid = false;
                    $(textboxObj.selector).css("border", "2px solid red");
                }
            }

            return isAllValid;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");
