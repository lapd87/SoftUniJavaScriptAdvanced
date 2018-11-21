class BaseElement {

    constructor() {
        if (new.target === BaseElement
            || this.constructor === BaseElement) {
            throw  new TypeError();
        }

        this.element = null;
    }

    appendTo(selector) {
        this.createElement();
        $(selector).append(this.element);
    }

    createElement() {
        this.element = this.getElementString();
    }

    getElementString() {
        return null;
    }
}

module.exports = BaseElement;