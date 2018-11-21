class Rat {
    constructor(name) {
        this.name = name;
        this.connectedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.connectedRats.push(otherRat);
        }
    }

    getRats() {
        return this.connectedRats;
    }

    toString() {
        let result = this.name;

        for (let rat of this.connectedRats) {
            result += "\r\n";
            result += "##" + rat.name;
        }

        return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
