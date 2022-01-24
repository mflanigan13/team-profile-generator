// link to page creation
//const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');
const { listenerCount } = require('process');

// team array
const teamArray = []; 

// prompts
const createEngineer = () => {
    console.log('Answer the question to assemble your team.');
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter your name!';
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter your ID!';
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter your e-mail!';
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    return 'Please enter in your github username!'
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer(
            answers.engineerName, 
            answers.id, 
            answers.email, 
            answers.github)
    
        teamArray.push(engineer);
        addEmployee();

    })
}
const createIntern = () => {
    console.log('Answer the question to assemble your team.');
    inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter your name!';
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter your ID!';
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter your e-mail!';
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: 'What is the name of your school?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    return 'Please enter your school name!';
                }
            }
        },
    ]) 
    .then(answers => {
        console.log(answers);
        const intern = new Intern(
            answers.internName, 
            answers.id, 
            answers.email, 
            answers.school)
    
        teamArray.push(intern);
        addEmployee();

    })
}

const createManager = () => {
    console.log('Answer the question to assemble your team.');
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter your name!';
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter your ID!';
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter your e-mail!';
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    return 'Please enter your office number!';
                }
            }
        },
    ]) 
    .then(answers => {
        console.log(answers);
        const manager = new Manager(
            answers.managerName, 
            answers.id, 
            answers.email, 
            answers.officeNumber)
    
        teamArray.push(manager);
        addEmployee();

    })
}



const addEmployee = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of Employee would you like to add?',
            choices: ['Engineer', 'Intern', 'Manager', 'Finished adding employees'],
        }
    ])
    .then(choice  => {
        switch (choice.employeeType) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            case 'Manager':
                createManager();
                break;
            default:
                writeFile()
        }
    }) 
}

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

createManager();