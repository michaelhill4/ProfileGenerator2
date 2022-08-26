const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./classes/Employee.js')
const Manager = require('./classes/Manager.js')
const Intern = require('./classes/Intern.js')
const Engineer = require('./classes/Engineer.js')
const employeeBucket = []

const init = () => {
return inquirer.prompt([
    {type: "input", 
        message: "enter Manager name",
        name: "managerName"
    
    },
  
    {type: input, 
        message: "enter Manager ID",
        name: "managerId"
        
    },
   
    {type: input, 
        message: "enter Manager Email",
        name: "managerName"

    
    },

    {type: input, 
        message: "enter Manager office number",
        name: "managerOfficerNumber"

    
    },
]) .then((t) => {
    console.log(t)
    const {managerName, managerID, managerEmail, managerOfficeNumber} = t
    const manager = new Manager()
employeeBucket.push(manager)
})

}
init()