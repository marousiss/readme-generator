// Function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPLv3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ISC":
      badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
  }
  return badge;
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Licensed under the MIT license.
  let link = "";
  switch (license) {
    case "MIT":
      link = "[MIT](https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPLv3":
      link = "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ISC":
      link = "[ISC](https://opensource.org/licenses/ISC)";
      break;
  }
  return link;
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license) {
    return `This project is licensed under the terms of the ${renderLicenseLink(license)} license.`;
  } 
  return "";
  
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const backstrokes = "```";
  const githublink = "http://github.com/";

  return `

${renderLicenseBadge(data.license)}

# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

<a name='installation'></a>
## Installation

${backstrokes}

${data.installation}
${backstrokes}

<a name='usage'></a>
## Usage

${data.usage}

<a name='contributing'></a>
## Contributing

${data.contribGuidelines}

<a name='license'></a>
## License

${renderLicenseSection(data.license)}

<a name='tests'></a>
## Tests

${data.testInstructions}

<a name='questions'></a>
## Questions

For additional questions please contact me at the following email address: ${data.email}


Please check my [GitHub Profile](${githublink}${data.gitUserName}) for more info about my work.

`;
}

module.exports = generateMarkdown;
