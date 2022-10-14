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
        message: 'Installation Instructions:',
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
        type: 'input',
        name: 'testInstructions',
        message: 'Test Instructions:',
    }
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
            writeToFile("README.md", readmeContent);
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
