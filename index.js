const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquire = require("inquirer");
const { default: inquirer } = require("inquirer");

let team = [];

function managerQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id",
        },
        {
            type: "input",
            message: "what is your email",
            name: "email",
        },
        {
            type: "input",
            message: "what is your office number",
            name: "office",
        },
        {
            type: "list",
            message: "what do you want to do next?",
            name: "action",
            choices: ["add Engineer", "add Intern", "Exit"]
        },
        
    ]).then(function (answers){
        let Employee = new Manager(answers.name, answers.id, answers.email, answers.office);
        team.push(Employee);
        if (answers.action == "add Engineer"){
            
            function engineerQuestions(){
                inquirer.prompt([
                    {
                        type: "input",
                        message: "what is your name",
                        name: "name"
                    },
                    {
                        type: "input",
                        message: "what is your id",
                        name: "id",
                    },
                    {
                        type: "input",
                        message: "what is your email",
                        name: "email",
                    },
                    {
                        type: "input",
                        message: "what is your github id",
                        name: "github",
                    },
                ]).then(function(answers){
                    let Employee = new Engineer(answers.name, answers.id, answers.email, answers.github)
                    team.push(Employee);
                })
            };
            engineerQuestions();


        } else if (answers.action == "add Intern"){
            
            function internQuestions(){
                inquirer.prompt([
                    {
                        type: "input",
                        message: "what is your name",
                        name: "name"
                    },
                    {
                        type: "input",
                        message: "what is your id",
                        name: "id",
                    },
                    {
                        type: "input",
                        message: "what is your email",
                        name: "email",
                    },
                    {
                        type: "input",
                        message: "what is your school",
                        name: "office",
                    },
                ]).then(function(answers){
                        let Employee = new Engineer(answers.name, answers.id, answers.email, answers.school)
                        team.push(Employee);
                    })
            }
            internQuestions();

        } else {
            const profileContent = getRole(answers);
            fs.writeFile('index.html', profileContent);
            
        }
    })

}