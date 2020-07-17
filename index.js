const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmEmail',
        message: 'Would you like to provide a contact email?',
        default: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email adress to contact you for this project?',
        when: ({ confirmEmail }) => confirmEmail
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name? (Required)",
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter your project's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: ['Apache 2.0', 'BSL 1.0', 'GPL 3.0', 'ISC', 'MIT', 'MPL 2.0', 'The Unlicense', 'NONE'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the command to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Do you have any guidelines for using your product?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What is the command to run tests?',
        default: 'npm testing'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for other developers to contribute to your project?',
        default: 'The Contributor Covenant'
//        default: '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)'
    },
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Do you want to credit any collaborators or third-party assets for this project?',
        default: false
    }/*
    {
        type: 'confirm',
        name: 'confirmAssets',
        message: 'Did you use any third-party assets that require attribution for this project?',
        default: false
    },
    {
        type: 'confirm',
        name: 'confirmTutorials',
        message: 'Did you follow any tutorials for this project?',
        default: false
    },*/
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, numm, '\t'), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success');
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(data => console.log(data));
};

// function call to initialize program
init();
