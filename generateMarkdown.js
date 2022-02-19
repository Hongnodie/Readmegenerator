// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeandLink(license) {
  let link;

  switch(license) {
      // badge and link from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
      case "MIT":
        link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "GPLv3":
        link = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "Apache":
        link = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "none":
        link = "";
        break;
      default:
        console.log("please check your inputs, license badge not able to retrieve");   
  }

  return link;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licensecontent;

  switch(license) {
      // badge and link from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
      case "MIT":
        licensecontent = `
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
          
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
        break;
      case "GPLv3":
        licensecontent = `
          This program is free software: you can redistribute it and/or modify
          it under the terms of the GNU General Public License as published by
          the Free Software Foundation, either version 3 of the License, or
          (at your option) any later version.
      
          This program is distributed in the hope that it will be useful,
          but WITHOUT ANY WARRANTY; without even the implied warranty of
          MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
          GNU General Public License for more details.
      
          You should have received a copy of the GNU General Public License
          along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        break;
      case "Apache":
        licensecontent = `   
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
      
            http://www.apache.org/licenses/LICENSE-2.0
      
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License.`;
        break;
      case "none":
        licensecontent = "";
        break;
      default:
        console.log("please check your inputs, license body don't exist");   
  }

  return licensecontent;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<br>
  
  ##  **${data.projectTitle}**
  <br>
  
  Badged as ${renderLicenseBadgeandLink(data.license)}
  <br>
    
  ###  **TABLE OF CONTENTS**

  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Info](#usage-info)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [License](#license)
  * [Credits](#credits)
  * [Questions](#questions)
  
  ###  **DESCRIPTION**
    
  ${data.description}
  <br>

  ###  **INSTALLATION INSTRUCTIONS**
  
  Before run this app, you have to install dependencies for this application first. To do so, it's suggested to run the following command:
  <br>
  \`${data.installationCommand}\`
  <br>
  in ${data.commandPlatform}
  <br>

  ###  **USAGE INFO**
  
  To start the application, user need to:
  <br>
  ${data.usageInfo}
  <br>

  ###  **CONTRIBUTION GUIDELINES**
    
  ${data.contributionGuidelines}
  <br>

  ###  **TEST INSTRUCTIONS**
  
  To run tests for this application you can run the following:

  \`${data.testInstructions}\`
  <br>

  ###  **LICENSE**
 
  This repository is licensed under the \`${data.license}\` license, which is specified as: <br>
  ${data.license} License
  Copyright (C) <${data.versionYear}>  <${data.githubUsername}> <br>
  ${renderLicenseSection(data.license)}
  <br>

  ###  **CREDITS**
  
  This project was made possible with the support and collaboration of:

  ${data.credits}
  <br>

  ###  **QUESTIONS**

  Should you have any questions or feedback about our app 
  <br>
  Please leave a message at:
  [https://github.com/${data.githubUsername}/](https://github.com/${data.githubUsername}/) 
  <br>
  or email to
  [${data.email}](mailto:${data.email})
  <br>`;

}

module.exports = generateMarkdown;
