function* fibonacci() {
    let current = 1;
    let next = 1;

    while (true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
