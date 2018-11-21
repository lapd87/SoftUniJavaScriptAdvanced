function timer() {

    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");

    let secondsCounter = 0;
    let interval = null;

    $("#start-timer").on('click', function (e) {
        if (interval === null) {
            interval = setInterval(function () {
                secondsCounter++;
                hours.text(("0" + Math.floor(secondsCounter / 60 / 60))
                    .slice(-2));
                minutes.text(("0" + Math.floor(secondsCounter / 60 % 60))
                    .slice(-2));
                seconds.text(("0" + secondsCounter % 60)
                    .slice(-2));
            }, 1000);
        }

    });

    $("#stop-timer").on('click', function (e) {
        clearInterval(interval);
        interval = null;
    });
}