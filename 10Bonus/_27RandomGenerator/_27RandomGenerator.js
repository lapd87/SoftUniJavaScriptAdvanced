function* random(number) {
    number = Math.pow(number, 2) % (4871 * 7919);

    while (true) {
        yield number % 100;
        number = Math.pow(number, 2) % (4871 * 7919);
    }
}

let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}
