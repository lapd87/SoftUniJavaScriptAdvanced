function personBMI() {

    let [name, age, weight, height] = arguments;

    let BMI = weight / Math.pow(height / 100, 2);

    let status = "";

    if (BMI < 18.5) {
        status = "underweight";
    } else if (BMI < 25) {
        status = "normal";
    } else if (BMI < 30) {
        status = "overweight";
    } else {
        status = "obese";
    }

    let person = {
        name,
        personalInfo: {age, weight, height},
        BMI: Math.round(BMI),
        status
    };

    if (status === "obese") {
        person.recommendation = "admission required";
    }

    return person;
}

console.log(personBMI("Peter", 29, 75, 182));
