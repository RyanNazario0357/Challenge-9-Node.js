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
    name: 'Contribution',
    message: 'How can I contribute to this project?',
    validate: your_Contribution => {
      if (your_Contribution) {
        return true;
      } else {
        console.log('Explain how users can contribute.');
        return false;
      }
    }
  },


  {
    type: 'list',
    name: 'License',
    message: 'Pick a License',
    choices: [{
        name: 'CC0 1.0',
        value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
      },
      {
        name: 'Apache 2.0',
        value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      },
    ],
    validate: your_License => {
      if (your_License) {
        return true;
      } else {
        console.log('Choose a License');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'Test',
    message: 'How can I test your project?',
    validate: your_Test => {
      if (your_Test) {
        return true;
      } else {
        console.log('Explain how its tested')
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'Github',
    message: 'Provide Github.',
    validate: Github_input => {
      if (Github_input) {
        return true;
      } else {
        console.log('Enter Github')
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'Email',
    message: 'Provide Email.',
    validate: email_input => {
      if (email_input) {
        return true;
      } else {
        console.log('Enter Email')
        return false;
      }
    }
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Mission Complete. Your ReadMe is ready!")
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();
