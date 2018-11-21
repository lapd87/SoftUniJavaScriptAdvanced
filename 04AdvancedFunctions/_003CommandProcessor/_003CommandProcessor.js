function commandProcessor(input) {

    let processor = (function () {
        let text = "";

        return {
            append: data => text += data,
            removeStart: data => text = text.slice(+data),
            removeEnd: data => text = text.slice(0, -+data),
            print: data => console.log(text)
        }
    }());


    for (let cmd of input) {
        let commandData = cmd.split(/\s+/);

        let command = commandData[0];
        let argument = commandData[1];

        processor[command](argument);
    }
}

commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);