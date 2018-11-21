class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    addToSelector(selector) {
        $(selector).append(this.domRepresentation());
    }

    domRepresentation() {
        return `<div class="person ${this.name}">
                    <p class="name">${this.name}</p>
                    <p class="age">${this.age}</p>
                    <div class="posts ${this.name}"></div>
                </div>`;
    }
}

module.exports = Person;