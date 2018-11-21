function createComputerHierarchy() {

    class Manufactured {

        constructor(manufacturer) {
            if (new.target === Manufactured
                || this.constructor === Manufactured) {
                throw  new Error();
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Manufactured {

        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Manufactured {

        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Manufactured {

        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Manufactured {

        constructor(manufacturer, processorSpeed,
                    ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw  new Error();
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {

        constructor(manufacturer, processorSpeed,
                    ram, hardDiskSpace,
                    weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }


        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            } else {
                throw new TypeError();
            }
        }
    }

    class Desktop extends Computer {

        constructor(manufacturer, processorSpeed,
                    ram, hardDiskSpace,
                    keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }


        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard) {
                this._keyboard = value;
            } else {
                throw new TypeError();
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor) {
                this._monitor = value;
            } else {
                throw new TypeError();
            }
        }
    }


    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);

// new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho");
// new Desktop("JAR Computers",3.3,8,1,1,monitor);
// new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor");


