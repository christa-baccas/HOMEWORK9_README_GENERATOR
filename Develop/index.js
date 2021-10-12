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
        message: 'Please list any test cases written for this assignement/project.',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Please enter your Email Address to be contacted with any questions.',
        name: 'contact',
      },
      
];
// console.log(questions)

//TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      err ? console.log(err) : console.log("README Created!")
    });
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((data) => {
    console.log(data)
    writeToFile('README.md', generateMarkdown(data));
});
}

// Function call to initialize app
init();




// README.md is generated with the:
    // title of my project (when I enter my project title it's displayed as the title of the README)
    // sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions (I enter this information, it's added to the sections of the README)
// If I choose a license for my application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// If I enter my GitHub username it's added to the section of the README entitled Questions, with a link to my GitHub profile
// If I enter my email address it's added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// when I click on the links in the Table of Contents I am taken to the corresponding section of the README
