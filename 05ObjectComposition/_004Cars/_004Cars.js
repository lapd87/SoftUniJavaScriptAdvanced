function cars(input) {

    let commandProcessor = (function () {

        let collection = new Map();

        return {
            create: (args) => {
                let name = args[0];

                if (args.length !== 3) {
                    collection.set(name, {name});
                } else {
                    let parentName = args[2];
                    let parent = collection.get(parentName);
                    let child = Object.create(parent);
                    child.name = name;
                    collection.set(name, child);
                }
            },
            set: (args) => {
                let name = args[0];
                let key = args[1];
                let value = args[2];
                collection.get(name)[key] = value;
            },
            print: (args) => {
                let car = collection.get(args[0]);

                let result = [];

                for (let key in car) {
                    if (key !== "name") {
                        result.push(`${key}:${car[key]}`);
                    }
                }

                console.log(result.join(", "));
            }
        };
    }());

    for (let commandData of input) {
        let args = commandData.split(/\s+/);
        let command = args[0];
        args.shift();

        commandProcessor[command](args);
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);