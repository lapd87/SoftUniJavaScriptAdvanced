(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString() === "";
    };

    String.prototype.truncate = function (n) {
        let stringLength = this.toString().length;

        if (stringLength > n) {
            if (n < 4) {
                return ".".repeat(n);
            }

            if (this.toString().includes(" ")) {
                let words = this.toString().split(/\s+/);

                let resultWords = [];
                let resultLength = 0;
                for (let word of words) {
                    if (resultLength + word.length + 3 <= n) {
                        resultWords.push(word);
                        resultLength += word.length + 1;
                    } else {
                        break;
                    }
                }

                if (resultWords.length > 0) {
                    return resultWords.join(" ") + "...";
                }
            }

            return this.toString().slice(0, n - 3) + "...";
        }

        return this.toString();
    };

    String.format = function (string, ...params) {
        let resultString = string;
        for (let i = 1; i < arguments.length; i++) {
            let pattern = `\\{${i - 1}\\}`;
            let regex = new RegExp(pattern, "g");
            resultString = resultString
                .replace(regex, arguments[i]);
        }

        return resultString;
    }
}());


let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);
