function mapSort(map, sortFn) {

    if (sortFn === undefined) {
        sortFn = (a, b) => {
            return a[0].toString().localeCompare(b[0].toString());
        }
    }

    return new Map(Array.from(map).sort(sortFn));
}

module.exports = mapSort;