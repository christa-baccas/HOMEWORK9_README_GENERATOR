// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.repo} \n

  # ${data.title} \n

  ## Description: \n ${data.description} \n

  ## Table of Contents \n  
    1.[Installation](#installation)
    2.[Usage](#usage)
    3.[Contributing](#contribute)
    4.[Tests](#test)
    
  ## Installation Process \n ${data.installation} \n

  ## Usage \n ${data.usage} \n

  ## Contributors \n ${data.contribute} \n

  ## Testing \n ${data.test} \n


  ## License \n 
  ${data.license} \n


  
  ## Questions: \n 
  If you have any questions, please feel free to contact me at:
  Email Address: ${data.contact} \n
  Github Account: https://github.com/${data.username}\n

`;
}


// exported
module.exports = generateMarkdown;
