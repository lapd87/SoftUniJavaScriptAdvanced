let Extensible = (function extensibleObject() {

    let id = 0;

    return class Extensible {

        constructor() {
            this.id = id++;
        }

        extend(templateObj) {
            Object.keys(templateObj).forEach(prop => {
                if (!this.hasOwnProperty(prop)) {
                    if (typeof templateObj[prop] === "function") {
                        Object.getPrototypeOf(this)[prop] = templateObj[prop];
                    } else {
                        this[prop] = templateObj[prop];
                    }
                }
            });
        };
    };
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
