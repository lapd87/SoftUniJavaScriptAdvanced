let solution = (function vectorMath() {

    function add(v1, v2) {
        return [v1[0] + v2[0], v1[1] + v2[1]];
    }

    function multiply(v1, multiplier) {
        return [v1[0] * multiplier, v1[1] * multiplier];
    }

    function length(vector) {
        return Math.sqrt(Math.pow(vector[0], 2)
            + Math.pow(vector[1], 2));
    }

    function dot(v1, v2) {
        return v1[0] * v2[0] + v1[1] * v2[1];
    }

    function cross(v1, v2) {
        return v1[0] * v2[1] - v1[1] * v2[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
}());

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.dot([1, 0], [0, -1]));