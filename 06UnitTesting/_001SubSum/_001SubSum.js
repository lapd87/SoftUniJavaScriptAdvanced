function subSum(array, startIndex, endIndex) {

    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += +array[i];
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));