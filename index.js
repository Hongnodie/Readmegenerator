// TODO: Include packages needed for this application
// Sourcing Node Package Manager (NPM)
const inquirer = require('inquirer');
const fs = require('fs');
// Sourcing local java file
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which one is your application's license?",
        choices: ["MIT", "GPLv2", "Apache", "none"]
    },
    {
        type: "editor",
        name: "description",
        message: "How would you describe your project? (hint: motivation, why build, what solved&learnt)",
    },
    {
        type: "rawlist",
        name: "installationCommand",
        message: "Which of those command should be promted to user to install dependencies in your application? (Enter number to select)",
        choices: ["npm i", "npm install", "npm i -y", "npm help"],
        default: "npm i"
    },
    {
        type: "input",
        name: "commandPlatform",
        message: "Type in where to run this command",
        default: "integrated Terminal"
    },
    {
        type: "editor",
        name: "usageInfo",
        message: "How could users start the application?",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "What do developers need to know about contributing to your repo?",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What command should be run to test for application?",
        default: "npm run test"
    },
    {
        type: "input",
        name: "credits",
        message: "To whom would you like to give credit for this project?",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        default: "abc@gmail.com"
    },
    {
        type: 'number',
        name: 'versionYear',
        message: 'Please specify the year of publishing in numbers:',
    }
];

// TODO: Create a function to write README file
function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, 
        (err) => err ? console.log(err) : console.log("Readme file generated successfully in the 'Generated' folder!")
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log("Please specify your readme file by answering to the following questions:");
    inquirer
        .prompt(questions)
        .then((answers) => {
            const pageContent = generateMarkdown(answers);
            writeToFile("./Generated/README.md", pageContent)        
            }
        ); 
}

// Function call to initialize app
init();
