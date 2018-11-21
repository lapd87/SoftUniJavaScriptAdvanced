class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    set clientId(value) {
        if (value.length === 6 && value.match(/\d+/)) {
            this._clientId = value;
        } else {
            throw new TypeError("Client ID must be a 6-digit number");
        }
    }

    set email(value) {
        if (value.match(/[A-Za-z\d]+@[A-Za-z.]+/)) {
            this._email = value;
        } else {
            throw new TypeError("Invalid e-mail");
        }
    }

    set firstName(value) {
        if (value.length < 3 || value.length > 20) {
            throw  new TypeError("First name must be between 3 and 20 characters long")
        } else if (!value.match(/[A-Za-z]+/)) {
            throw new TypeError("First name must contain only Latin characters");
        } else {
            this._firstName = value;
        }
    }

    set lastName(value) {
        if (value.length < 3 || value.length > 20) {
            throw  new TypeError("Last name must be between 3 and 20 characters long")
        } else if (!value.match(/[A-Za-z]+/)) {
            throw new TypeError("Last name must contain only Latin characters");
        } else {
            this._lastName = value;
        }
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');