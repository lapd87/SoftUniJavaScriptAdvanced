function sortArray(array, sortingType) {

    if (sortingType === "asc") {
        return array.sort((a, b) => a - b);
    }

    return array.sort((a, b) => b - a);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));;