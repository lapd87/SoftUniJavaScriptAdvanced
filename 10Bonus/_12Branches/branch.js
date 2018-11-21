let Employee = require("./employee");

class Branch {

    constructor(branchId, branchName, companyName) {
        this._branchId = branchId;
        this._branchName = branchName;
        this._companyName = companyName;
        this._employees = [];
    }

    get branchId() {
        return this._branchId;
    }

    set branchId(value) {
        this._branchId = +value;
    }

    get branchName() {
        return this._branchName;
    }

    set branchName(value) {
        this._branchName = value;
    }

    get companyName() {
        return this._companyName;
    }

    set companyName(value) {
        this._companyName = value;
    }

    get employees() {
        return this._employees;
    }

    hire(employee) {
        this._employees.push(employee);
    }

    toString() {
        let employeeString = "None...";

        if (this.employees.length > 0) {
            employeeString = `** ${this.employees.map(e => e.toString()).join("\n** ")}`
        }
        return `@ ${this.companyName}, ${this.branchName}, ${this.branchId}\n`
            + `Employed:\n` + employeeString;
    }
}

module.exports = Branch;