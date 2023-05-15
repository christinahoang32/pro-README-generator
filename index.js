// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require (".utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
 message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions for your project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "ISC License"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(readme-gen.md, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully generated readme-gen.md`);
        }
      });
    }





// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then (function(answers)) {
        const markdownText = generateMarkdown(answers);
        writeToFile('readme-gen.md', markdownText);
    }
}

// Function call to initialize app
init();
