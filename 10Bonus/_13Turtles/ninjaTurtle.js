let Turtle = require("./turtle");

class NinjaTurtle extends Turtle {

    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this._maskColor = maskColor;
        this._weapon = weapon;
        this.level = 0;
    }


    get maskColor() {
        return this._maskColor;
    }

    set maskColor(value) {
        this._maskColor = value;
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(value) {
        this._weapon = value;
    }


    grow(age) {
        super.grow(age);
        this.level += age;
    }

    toString() {
        let result = super.toString()
            + `\n${this.name.substring(0, 3)} wears a ${this.maskColor} mask, and is `;

        if (this.level < 25) {
            result += `an apprentice`;
        } else if (this.level < 100) {
            result += `smokin strong`;
        } else {
            result += `BEYOND GODLIKE`;
        }

        result += ` with the ${this.weapon}.`;

        return result;
    }
}

module.exports = NinjaTurtle;