function maxElement(input) {

    return input.reduce((a, b) => Math.max(a, b));
}

maxElement([10, 20, 5]);