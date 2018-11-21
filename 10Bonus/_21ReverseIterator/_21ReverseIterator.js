function reverseArrayIterator(input) {
    let index = input.length - 1;

    return {
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

let iterator = reverseArrayIterator([10, 20, 30]);
while (true) {
    let item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}
