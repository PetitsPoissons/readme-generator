const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        maeesage: 'Please write a short description of your project:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'ISC License', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
        default: 'MIT License'
    },
    {
        type: 'input',
        name: 'cmdDependencies',
        message: 'What is the command to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'cmdTests',
        message: 'What is the command to run tests?',
        defaults: 'npm runtests'
    },
    {
        type: 'input',
        name: 'howToUse',
        message: 'What are instructions for the user to use the repo?',
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'What are instructions for the user to contribute to the repo?'
    }
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

}

// function call to initialize program
init();
