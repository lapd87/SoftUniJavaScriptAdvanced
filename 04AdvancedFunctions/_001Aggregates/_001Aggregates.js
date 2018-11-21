function aggregates(input) {

    let result = `Sum = ${input.reduce((a, b) => a + b)}
Min = ${input.reduce((a, b) => Math.min(a, b))}
Max = ${input.reduce((a, b) => Math.min(a, b))}
Product = ${input.reduce((a, b) => a * b)}
Join = ${input.reduce((a, b) => "" + a + b)}`;

    console.log(result);
}

aggregates([2, 3, 10, 5]);