let Turtle = require("./turtle");

class EvkodianTurtle extends Turtle {

    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this._evkodiumValue = evkodiumValue;
    }

    get evkodium() {
        return {
            value: this._evkodiumValue,
            density: this.age * (this.gender === "male" ? 3 : 2)
        };
    }

    set evkodiumValue(value) {
        this._evkodiumValue = value;
    }

    toString() {
        return super.toString() + `\nEvkodium: ${this.evkodium.value * this.evkodium.density}`
    }
}

module.exports = EvkodianTurtle;