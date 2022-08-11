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
        },

    {
        type: 'input',
        name: 'Description',
        message: 'What is your Description',
        validate: your_Description => {
            if (your_Description) {
                return true;
            } else {
                console.log('Please enter a Description.');
                return false;
            }
            }
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'How can I install your project?',
        validate: your_Installation => {
            if (your_Installation) {
                return true;
            } else {
                console.log('Please enter the steps on how to install it.');
                return false;
            }
            }
        },

        {
        type: 'input',
        name: 'Usage',
        message: 'How can I use it?',
        validate: your_Usage => {
            if (your_Usage) {
                return true;
            } else {
                console.log('Please explain how i can use it.');
                return false;
            }
            }
            },
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
