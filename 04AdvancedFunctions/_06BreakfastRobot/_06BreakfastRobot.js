let manager = (function solution() {

    let storage = new Map();
    storage.set("protein", 0);
    storage.set("carbohydrate", 0);
    storage.set("fat", 0);
    storage.set("flavour", 0);

    let macroelements = Array.from(storage.keys());

    let recipes = new Map();
    recipes.set("apple", [0, 1, 0, 2]);
    recipes.set("coke", [0, 10, 0, 20]);
    recipes.set("burger", [0, 5, 7, 3]);
    recipes.set("omelet", [5, 0, 1, 1]);
    recipes.set("cheverme", [10, 10, 10, 10]);


    function restock(macroelement, quantity) {
        storage.set(macroelement,
            storage.get(macroelement) + quantity);
        return "Success";
    }

    function prepare(recipe, dishesQuantity) {
        let neededProductsQuantities = recipes.get(recipe)
            .map(p => p * dishesQuantity);

        let tempStorage = new Map(storage);

        for (let i = 0; i < 4; i++) {
            let currentNeededQuantity = neededProductsQuantities[i];

            if (currentNeededQuantity === 0) {
                continue;
            }

            let macroelementName = macroelements[i];
            let currentQuantity = tempStorage.get(macroelementName);

            if (currentQuantity < currentNeededQuantity) {
                return `Error: not enough ${macroelementName} in stock`;
            }

            tempStorage.set(macroelementName,
                currentQuantity - currentNeededQuantity);
        }

        storage = tempStorage;
        return "Success";
    }

    function report() {
        let result = "";

        for (let macroelement of macroelements) {
            result += `${macroelement}=${storage.get(macroelement)} `;
        }

        return result.trim();
    }


    return function processCommands(input) {

        let commandData = input.split(/\s+/);
        let command = commandData[0];

        switch (command) {
            case"restock":
                return restock(commandData[1], +commandData[2]);
            case"prepare":
                return prepare(commandData[1], +commandData[2]);
            case "report":
                return report();
        }
    }
}());

// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

console.log(manager("prepare cheverme 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("report"));

