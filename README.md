# Readmegenerator

## Purpose

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&amp;mdash;this last part increases the likelihood that other developers will contribute to the success of the project. This app create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).
<br>

## Description

This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application will be invoked by using the following command: `node index.js`. After receiving the answers the application creates a README.md file in the generatedREADME folder. Each subsequent generation will overwrite the existing README file.  
<br>

## Acceptance Criteria

The codebase achieves the following criteria:

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
<br>

## Usage

Under the link below you will find a walkthrough video that demonstrates; how a user would invoke the application from the command line, how a user would enter responses to all of the prompts in the application and a generated README.md that matches the user input and has a functioning table of contents.<br>
If the video appears out of focus please hit the space bar twice.

[Google drive video]()
<br>

A screenshot that shows the terminal with all the prompts:
<br>

![Prompts Screenshots]()
<br>

A screenshot that shows the generated README file:
<br>

![generated README file](./Generated/README.md)
<br>

## Some Resources

Some useful resources that helps better understanding the code are given below:
<br>

[Documentation of raedme file components - github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) <br>

[License Badge](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) <br>

## Credits

Credits are given to the following person that assist in the development of this app

Boot camp instructors
<br>

## License & Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>

