// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./generateMarkdown')
console.log("Hello User. This is ReadMe!")
console.log("Please answer a couple of the questions below so that i can create a ReadMe file.")
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Title',
        message: 'What is your title',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Please enter a title.');
                return false;
            }
            }
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
