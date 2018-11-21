function argInfo() {

    let result = new Map();

    for (let arg of arguments) {
        let type = typeof arg;

        if (!result.has(type)) {
            result.set(type, 0);
        }

        result.set(type, result.get(type) + 1);

        console.log(`${type}: ${arg}`);
    }

    [...result].sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));
}

argInfo('cat', 42, function () {
    console.log('Hello world!');
});