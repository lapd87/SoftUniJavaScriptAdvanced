function sortedList() {

    return (function () {
        let list = [];

        let add = function (element) {
            list.push(element);
            list = list.sort((a, b) => a - b);
            this.size++;
            return list;
        };

        let remove = function (index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
                this.size--;
                return list;
            }
        };

        let get = function (index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            }
        };

        let size = 0;

        return {add, remove, get, size};
    })();
}

let result = sortedList();
result.add(99);
result.add(10);
result.add(2);
result.remove(1);
console.log(result.size);
console.log(result.get(0));


