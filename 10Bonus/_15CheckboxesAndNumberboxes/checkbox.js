class Checkbox{
    constructor(label, selector){
        this._label = label;
        this.selector = selector;
        this._value = $(selector).prop('checked');
        let that = this;
        $(selector).change(function () {
            that._value = $(this).prop('checked');
        });
    }

    get label(){
        return this._label;
    }

    get elements(){
        return $(this.selector);
    }

    get value(){
        return this._value;
    }

    set value(newValue){
        if(typeof newValue !== typeof true){
            throw new Error(newValue);
        }

        this._value = newValue;
        this.elements.prop('checked', newValue)
    }
}

module.exports = Checkbox;