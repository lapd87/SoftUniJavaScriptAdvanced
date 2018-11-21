let Turtle = require("./turtle");

class WaterTurtle extends Turtle {

    constructor(name, age, gender, waterPool) {
        super(name, age, gender);
        this._waterPool = waterPool;
    }


    get currentWaterPool() {
        return this._waterPool;
    }

    set waterPool(value) {
        this._waterPool = value;
    }

    travel(waterPool) {
        this._waterPool = waterPool;
        super.grow(5);
    }

    toString() {
        return super.toString() + `\nCurrently inhabiting ${this.currentWaterPool}`
    }
}

module.exports = WaterTurtle;