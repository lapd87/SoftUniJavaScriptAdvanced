function extensibleObject() {

    let obj = Object.create({});

    obj.extend = function (templateObj) {
        Object.keys(templateObj).forEach(prop => {
            if (!obj.hasOwnProperty(prop)) {
                if (typeof templateObj[prop] === "function") {
                    Object.getPrototypeOf(obj)[prop] = templateObj[prop];
                } else {
                    obj[prop] = templateObj[prop];
                }
            }
        });
    };

    return obj;
}

let result = extensibleObject().extend({
    extensionMethod: function () {
        console.log("extensionMethod");
    },
    extensionProperty: "extensionProperty"
});

console.log(result);