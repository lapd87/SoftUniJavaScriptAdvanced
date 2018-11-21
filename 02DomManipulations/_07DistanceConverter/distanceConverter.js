function attachEventsListeners() {

    let button = document.getElementById("convert");

    button.addEventListener("click", convert);

    function convert() {
        let inputType = document.getElementById("inputUnits").value;
        let outputType = document.getElementById("outputUnits").value;
        let value = +document.getElementById("inputDistance").value;


        let distanceConverter = new Map();
        distanceConverter.set("km", 0.001);
        distanceConverter.set("m", 1.0);
        distanceConverter.set("cm", 100.0);
        distanceConverter.set("mm", 1000.0);
        distanceConverter.set("mi", 0.000621371192);
        distanceConverter.set("yrd", 1.0936133);
        distanceConverter.set("ft", 3.2808399);
        distanceConverter.set("in", 39.3700787);

        let result = value / distanceConverter.get(inputType)
            * distanceConverter.get(outputType);

        debugger;
        let output = document.getElementById("outputDistance");
        output.disabled = false;
        output.value = result;
        output.disabled = true;
    }
}