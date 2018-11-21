function keplersProblem(mean, ecc) {

    let precision = Math.pow(10, -9);

    console.log(+(approximate(mean, ecc, 0).toFixed(9)));

    function approximate(E0, ecc, series) {
        if (Math.abs(mean - (E0 - ecc * Math.sign(E0))) < precision
            || series > 200) {
            return E0;
        }

        return approximate(E0 - (E0 - ecc * Math.sin(E0) - mean)
            / (1 - ecc * Math.cos(E0)), ecc, ++series);
    }
}

keplersProblem(0.25, 0.99);
keplersProblem(3.1415926535, 0.75);



