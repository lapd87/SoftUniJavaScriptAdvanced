function result() {
    let sumSubstract = (function () {

        let selector1 = null;
        let selector2 = null;
        let resultSelector = null;

        return {
            init: (s1, s2, rs) => {
                debugger;

                selector1 = $(s1);
                selector2 = $(s2);
                resultSelector = $(rs);
            },

            add: () => {
                debugger;
                resultSelector.val(+selector1.val()
                    + +selector2.val());
            },

            subtract: () => {
                resultSelector.val(+selector1.val()
                    - +selector2.val());
            }
        }
    })();

    sumSubstract.init('#num1', '#num2', '#result');
    $('#sumButton').click(sumSubstract.add);
    $('#subtractButton').click(sumSubstract.subtract);
}