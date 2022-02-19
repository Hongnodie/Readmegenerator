// TODO: Include packages needed for this application
// Sourcing Node Package Manager (NPM)
const inquirer = require('inquirer');
const fs = require('fs');
// Sourcing local java file
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, 
        (err) => err ? console.log(err) : console.log("Readme file generated successfully in the 'Generated' folder!")
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log("Please answer the following questions:");
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
