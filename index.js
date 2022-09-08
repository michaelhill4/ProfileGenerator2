const inquirer = require("inquirer")

const Employee = require("./classes/Employee.js")
const Engineer = require("./classes/Engineer.js")
const Intern = require("./classes/Intern.js")
const Manager = require("./classes/Manager.js")

const employeeBucket = []


const init = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter Manager name",
            name: "managerName"

        },
        {
            type: "input",
            message: "Please enter ID",
            name: "managerId"

        },
        {
            type: "input",
            message: "Please enter email",
            name: "managerEmail"

        },
        {
            type: "input",
            message: "Please enter Manager office number",
            name: "managerOfficeNum"

        },
    ]).then((managerData) => {
        const { managerName, managerId, managerEmail, managerOfficeNum } = managerData
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNum)
        employeeBucket.push(manager)
        anotherEmployee(manager)
        
    })
}
const anotherEmployee = () => {
    
    return inquirer.prompt([
        {
            type: "list",
            message: "Please add a new employee",
            choices: [
                "Engineer",
                "Intern",
            ],
            name: "employeeAdd",

        }
    ]).then((newCase) => {
        switch (newCase.employeeAdd) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;

            }
        })
    }
    
    const addEngineer = () => {
        return inquirer.prompt([
            {
                type: "input",
                message: "Enter engineers name",
                name: "engineerName"
                
            },
            {
                type: "input",
                message: "Enter new engineer employee ID",
                name: "engineerId"
                
            },
            {
                type: "input",
                message: "Enter new engineer email",
                name: "engineerEmail"
                
            },
            {
                type: "input",
                message: "Enter engineers GitHub username",
                name: "engineerGit"
                
            },
        ]).then((engineerData) => {
        const { engineerName, engineerId, engineerEmail, engineerGit } = engineerData
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGit)
        employeeBucket.push(engineer)
        anotherEmployee()
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter intern's name",
            name: "nameOfIntern"
            
        },
        {
            type: "input",
            message: "Please enter new intern employee ID",
            name: "internId"
            
        },
        {
            type: "input",
            message: "Please enter the interns' full email",
            name: "internEmail"
            
        },
        {
            type: "input",
            message: "Please enter the name of school the new intern attends",
            name: "internSchool"
            
        },
    ]).then((internData) => {
        const { nameOfIntern, internId, internEmail, internSchool } = internData
        const intern = new Intern(nameOfIntern, internId, internEmail, internSchool)
        employeeBucket.push(intern)
        anotherEmployee(intern)
        
    })
}