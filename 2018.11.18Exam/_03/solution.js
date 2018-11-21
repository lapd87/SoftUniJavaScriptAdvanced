class Vacation {

    constructor(organizer, destination, budget) {

        this.organizer = organizer;
        this.destination = destination;
        this.budget = +budget;
        this.kids = {};
        this._kiddds = new Map();
    }

    _convertMapObj() {
        const xah_map_to_obj = (aMap => {
            const obj = {};
            aMap.forEach((v, k) => {
                obj[k] = v
            });
            return obj;
        });

        this.kids = xah_map_to_obj(this._kiddds);
    }


    registerChild(name, grade, budget) {
        budget = +budget;
        if (!this._kiddds.has(grade)) {
            this._kiddds.set(grade, []);
        }

        let kid = {
            name,
            budget,
            toString() {
                return `${this.name}-${this.budget}`
            }
        };

        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (this._kiddds.get(grade)
            .some(k => k.toString() === kid.toString())) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        this._kiddds.get(grade).push(kid);

        this._convertMapObj();
        return this._kiddds.get(grade).map(k => k.toString());
    }

    removeChild(name, grade) {

        if (!this._kiddds.has(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }

        let previousCount = this._kiddds.get(grade).length;

        this._kiddds.set(grade, this._kiddds.get(grade)
            .filter(k => k.name !== name));

        let currentCount = this._kiddds.get(grade).length;

        if (previousCount === currentCount) {
            return `We couldn't find ${name} in ${grade} grade.`
        } else {
            this._convertMapObj();
            return this._kiddds.get(grade).map(k => k.toString());
        }
    }

    toString() {
        function mapSort(map, sortFn) {

            if (sortFn === undefined) {
                sortFn = (a, b) => {
                    return a[0].toString().localeCompare(b[0].toString());
                }
            }

            return new Map(Array.from(map).sort(sortFn));
        }


        let sorted = mapSort(this._kiddds, function (a, b) {
            return a[0] - b[0];
        });

        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        for (let key of sorted.keys()) {
            let kids = sorted.get(key);

            if (kids.length === 0) {
                continue;
            }

            result += `Grade: ${key}\n`;

            for (let i = 0; i < kids.length; i++) {
                result += `${i + 1}. ${kids[i].toString()}\n`;
            }
        }

        return result;
    }

    get numberOfChildren() {
        let grades = [...this._kiddds.values()];

        let count = 0;

        grades.forEach(g => count += g.length);
        return count;
    }
}


let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));


vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000));


vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());

