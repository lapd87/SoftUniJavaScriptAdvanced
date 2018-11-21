let Checkbox = require("./checkbox");
let Numberbox = require("./numberbox");


let check = new Checkbox("Is Married:", "#married");
let number = new Numberbox("Age:", "#age", 1, 100);
let cbox = $('#married');
let nbox = $('#age');
cbox.on('change', () => console.log(check.value));
nbox.on('change', () => console.log(number.value));