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
  # ${data.title} \n

  ## Description: \n ${data.description} \n

  ## Table of Contents \n  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [License](#license)
    
  ## Installation Process \n ${data.installation} \n

  ## Usage \n ${data.usage} \n

  ## Contributors \n ${data.contribute} \n

  ## Testing \n ${data.test} \n


  ## License \n 
  ${data.license} \n

  
  ## Questions: \n 
  If you have any questions, please feel free to contact me at:\n
  Email Address: ${data.contact} \n
  Github Account: https://github.com/${data.username}\n

`;
}


// exported
module.exports = generateMarkdown;
