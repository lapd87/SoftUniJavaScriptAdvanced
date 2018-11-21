class Turtle {

    constructor(name, age, gender) {
        if (new.target === Turtle
            || this.constructor === Turtle) {
            throw  new TypeError();
        }

        this._name = name;
        this._age = age;
        this._gender = gender;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = +value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    grow(age) {
        this._age += +age;
    }

    toString() {
        return `Turtle: ${this.name}\nAged - ${this.age}; Gender - ${this.gender}`
    }
}

module.exports = Turtle;