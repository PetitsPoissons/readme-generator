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
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        maeesage: 'Please write a short description of your project:'
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
        message: 'What are instructions for the user to use the repo?',
    },
    {
        type: 'confirm',
        name: 'confirmCollaborators',
        message: 'Did you have any collaborators on this project?',
        default: false
    },
    {
        type: 'confirm',
        name: 'confirmAssets',
        message: 'Did you use any third-party assets that require attribution for this project?',
        default: false
    },
    {
        type: 'confirm',
        name: 'confirmTutorials',
        message: 'Did you follow any tutorials this project?',
        default: false
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
        name: 'badges',
        message: 'NOT SURE HOW TO DO BADGES'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for other developers to contribute to your project?',
        default: '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)'
    }
    {
        type: 'input',
        name: 'tests',
        message: 'What is the command to run tests?',
        defaults: 'npm runtests'
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
