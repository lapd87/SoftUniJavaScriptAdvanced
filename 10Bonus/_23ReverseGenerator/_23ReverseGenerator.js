function* reverseArrayGenerator(input) {
    let index = input.length - 1;

    while (index >= 0) {
        yield input[index--];
    }
}

let arr = [10, 20, 30];

for (let item of reverseArrayGenerator(arr)) {
    console.log(item);
}
