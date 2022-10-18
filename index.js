// Packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./generateMarkdown.js');

// Array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Project title:',
},
{
    type: 'input',
    name: 'description',
    message: 'Project Description:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please enter your installation instructions here:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage Information:',
},
{
    type: 'input',
    name: 'contribGuidelines',
    message: 'Contribution Guidelines:',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'ISC'],
},
{
    type: 'input',
    name: 'testInstructions',
    message: 'Test Instructions:',
},
{
    type: 'input',
    name: 'gitUserName',
    message: 'Enter your GitHub username:',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
},

];

// Function to write README file
function writeToFile(fileName, fileContent) {
    fs.writeFile(fileName, fileContent, (err) =>
        err ? console.log(err) : console.log("Successfully genereated README file")
    );
}

// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            let readmeContent = generateMarkdown(data);
            writeToFile("./generatedREADME/README.md", readmeContent);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment");
            } else {
                console.log(error);
            }
        });
}

// Function call to initialize app
init();
