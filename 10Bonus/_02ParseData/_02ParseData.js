function makeCandy(input) {
    class Candy {

        constructor(topping, filling, spice) {
            this.setTopping = topping;
            this.setFilling = filling;
            this.setSpice = spice;
        }

        set setTopping(value) {
            if (value === null
                || !['milk chocolate', 'white chocolate',
                    'dark chocolate'].includes(value)) {
                throw new TypeError();
            }
            this.topping = value;
        }

        set setFilling(value) {
            if (value === null) {
                this.filling = null;
            } else {
                let fillings = value.split(",");
                if (fillings.length > 3) {
                    throw new TypeError();
                }

                let validFillings = ['hazelnut', 'caramel',
                    'strawberry', 'blueberry', 'yogurt', 'fudge'];
                if (!fillings.some(e => validFillings.includes(e))) {
                    throw new TypeError();
                }

                this.filling = value;
            }
        }

        set setSpice(value) {
            if (['poison', 'asbestos'].includes(value)) {
                throw new TypeError();
            }
            this.spice = value;
        }
    }

    let result = [];
    for (let inputLine of input) {
        let data = inputLine.split(":").map(element => {
            if (element === "") {
                return null;
            } else {
                return element;
            }
        });

        if (data.length > 3) {
            continue;
        }

        let topping = data[0];
        let fillings = data[1];
        let spice = data[2];

        try {
            let candy = new Candy(topping, fillings, spice);
            result.push(candy);
        } catch (ignored) {
        }
    }
    return result;
}

console.log(makeCandy([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals'
]));
