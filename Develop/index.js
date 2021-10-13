// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer'); //import npm package
const fs = require('fs');

// TODO: Create an array of questions for user input (inquirer prompt for the users input)
const questions = [
      {
        type: 'input',
        message: 'What is your Giithub Username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is the name of your Github Repository?',
        name: 'repo',
      },
      {
        type: 'input',
        message: 'What is the title of your assignement/project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please add a description of your assignement/project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please add installation steps for your assignement/project.',
        name: 'installation',
      },
      {
        type: 'list',
        message: 'Please select the license for your assignement/project.',
        name: 'license',
        choices: ['MIT', 'GNU General Public license v3.0', 'Apache License 2.0', 'Boost Software Lisense 1.0']
      },
      {
        type: 'input',
        message: 'Please list any help/assitance received for this assignement/project.',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Please provide examples on how your application is used.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please list any test cases written for this assignement/project.',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Please enter your email address to be contacted with any questions.',
        name: 'contact',
      },
      
];
// console.log(questions)

//TODO: Create a function to write README file
function writeToFile(fileName, userInput) {
    fs.writeFile(fileName, data, err => {
      err ? console.log(err) : console.log("README Created!")
    })
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((userInput) => {
    console.log(userInput)
    writeToFile('README.md', generateMarkdown(userInput));
});
}

// Function call to initialize app
init();

