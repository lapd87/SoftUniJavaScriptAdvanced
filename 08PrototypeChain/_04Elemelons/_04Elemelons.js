function solve() {

    class Melon {

        constructor(weight, melonSort) {
            if (new.target === Melon
                || this.constructor === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.constructor.name.slice(0, -5)}\n`
                + `Sort: ${this.melonSort}\n`
                + `Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.currentElement = "Water";
            this._elements = ["Fire", "Earth", "Air", "Water"];
        }

        morph() {
            this.currentElement = this._elements.shift();
            this._elements.push(this.currentElement);
        }

        toString() {
            return `Element: ${this.currentElement}\n`
                + `Sort: ${this.melonSort}\n`
                + `Element Index: ${this.elementIndex}`;
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

let classesObj = solve();
let Melon = classesObj.Melon;
let Watermelon = classesObj.Watermelon;
let Firemelon = classesObj.Firemelon;
let Earthmelon = classesObj.Earthmelon;
let Airmelon = classesObj.Airmelon;
let Melolemonmelon = classesObj.Melolemonmelon;


// let test = new Melon(100, "Test");
//Throws error

let test2 = new classesObj.Melolemonmelon(150, "Melo");
console.log(test2.toString());
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
