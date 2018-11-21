class Entity {

    constructor(name) {
        if (new.target === Entity
            || this.constructor === Entity) {
            throw  new Error();
        }
        this.name = name;
    }
}


module.exports = Entity;