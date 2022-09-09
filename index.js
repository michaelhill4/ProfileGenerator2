const inquirer = require("inquirer")

const fs = require('fs')
const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")

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
            message: "Please enter manager ID",
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
        anotherEmployee();
        
    })
}
//  
  function anotherEmployee ()  {
    
    return inquirer.prompt([
        {
            type: "list",
            message: "Please add a new employee",
            choices: [
                "Engineer",
                "Intern",
                "No new Employees"
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
                case "No new Employees":
                generateHtml()

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
            // takes in answers to engineer questions to creata a data variable
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
        // console.log(employeeBucket)
    })
}

function returnHtml() {


    var htmlElements = []
for (let i = 0; i < employeeBucket.length; i++) {
    htmlElements.push(`<card>
    <p>Name: ${employeeBucket[i].name}</p>
    <ul>
    <li>ID: ${employeeBucket[i].id}</li>
    <li>Office Number: ${employeeBucket.[i].managerOfficeNum}</li>
    <li>Email: ${employeeBucket[i].email}</li>
</ul>
</card>`)
}

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${htmlElements}
    </body>
    </html>`
}

function generateHtml() {
    console.log(employeeBucket)

    fs.writeFile("./src/index.html", returnHtml(), (err) =>
    // pass a string thru the data array?
    err ? console.log(err) : console.log('Successfully created index.html!'))
}

init();
// i have all the info i need now i just need to generate an html

