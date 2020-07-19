const fs = require('fs');
const inquirer = require('inquirer');
const licenses = require('./utils/licenses');
const generateMarkdown = require('./utils/generateMarkdown');

// arrays of questions for user
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
        message: 'Please write a short description of your project (required):',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please write a short description of your project.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: Object.keys(licenses),
        default: 'Unlicense'
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
        message: 'What are instructions and examples for using your product?',
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
        default: 'Contributor Covenant'
    },
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Are there any credit attributions you want to make for this project?',
        default: false
    }
];

const creditQuestions = [
    {
        type: 'input',
        name: 'creditName',
        message: 'Please enter the name of a collaborator or third-party asset you want to credit:'
    },
    {
        type: 'input',
        name: 'creditLink',
        message: 'Please enter a link for your collaborator or the third-party asset you used:'
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add another credit attribution?',
        default: false
    }
];

const getCredits = function(readmeData) {
    if (!readmeData.confirmCredits) {
        return readmeData;
    };
    if (!readmeData.credits) {
        readmeData.credits = [];
    };
    console.log('********** Add a credit attribution **********');
    return inquirer
            .prompt(creditQuestions)
            .then(creditData => {
                readmeData.credits.push(creditData);
                if (creditData.askAgain) {
                    return getCredits(readmeData);
                } else {
                    return readmeData;
                }
            });
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("Success! Checkout your README file in the 'dist' folder");
    });
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(getCredits)
    .then(readmeData => generateMarkdown(readmeData))
    .then(pageMD => writeToFile('./dist/README.md', pageMD))
    .catch(err => console.log(err));
};

// function call to initialize program
init();
