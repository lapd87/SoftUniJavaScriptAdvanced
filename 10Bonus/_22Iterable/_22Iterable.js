function reverseArrayIterable(input) {
    let index = input.length - 1;

    return {
        [Symbol.iterator]: function () {
            return this;
        },
        next: function () {
            if (index >= 0) {
                return {
                    value: input[index--],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let item of reverseArrayIterable([10, 20, 30])) {
    console.log(item);
}
