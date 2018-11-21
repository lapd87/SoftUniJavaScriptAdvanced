function classHierarchy() {

    class Figure {
        constructor() {
            if (new.target === Figure
                || this.constructor === Figure) {
                throw  new TypeError();
            }
        }

        toString() {
            let properties = Object.keys(this)
                .map(p => `${p}: ${this[p]}`);
            return `${this.constructor.name} - ${properties.join(", ")}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }
    }

    return {Figure, Circle, Rectangle}
}

let classHierarchyObj = classHierarchy();
let Figure = classHierarchyObj.Figure;
let Circle = classHierarchyObj.Circle;
let Rectangle = classHierarchyObj.Rectangle;

// let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3, 4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
