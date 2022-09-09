class Employee {
    constructor(name, id, email, title) {
        this.name = name
        this.id = id
        this.email = email
        this.title = title
    }

    getName() {
        return this.name
    
    }
}

module.exports = Employee
