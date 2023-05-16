// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `
![License](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-blue.svg)
`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `https://choosealicense.com/licenses/${license.toLowerCase().replace(/ /g, '-')}`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  if (!license) {
  return '';
}
return `
## License
This project is licensed under the ${license} license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

 


  ## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License ${renderLicenseBadge(answers.license)}
${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions or support, please contact ${answers.email}. You can also find more information and other projects on my [GitHub profile](https://github.com/${answers.github}).
`;
}

module.exports = generateMarkdown;
