function listProcessor(input) {

    let commandProcessor = (function () {

        let collection = [];

        return {
            add: (string) => collection.push(string),
            remove: (string) => collection = collection.filter(e => e !== string),
            print: () => console.log(collection.join(","))
        };
    }());

    for (let commandData of input) {
        let [command, string] = commandData.split(/\s+/);

        commandProcessor[command](string);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);