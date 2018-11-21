class TimeSpan {

    constructor(hours, minutes, seconds) {
        function throwRangeError(parameter, value) {
            throw new RangeError(`Invalid ${parameter}: ${value}`);
        }

        if (!Number.isInteger(hours)) {
            throwRangeError("hours", hours);
        }

        if (!Number.isInteger(minutes)) {
            throwRangeError("minutes", minutes);
        }

        if (!Number.isInteger(seconds)) {
            throwRangeError("seconds", seconds);
        }

        this.seconds = +hours * 3600 + +minutes * 60 + +seconds;
    }

    toString() {
        let hours = Math.floor(this.seconds / 3600);
        let minutes = Math.floor((this.seconds % 3600) / 60);
        let seconds = this.seconds % 60 % 60;
        return `${hours}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
    }
}

console.log('' + new TimeSpan(7, 8, 5));
console.log('' + new TimeSpan(12, 76, -5));