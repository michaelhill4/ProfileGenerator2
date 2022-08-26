const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber

    }
}
const test = newManager("Max", 69, "email@gmail.com", 420)

console.log(test)