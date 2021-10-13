// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `https://img.shields.io/badge/license-${license}-blue`
      break;
    case 'GNU General Public license v3.0':
      return `https://img.shields.io/badge/license-${license}-red`.replace(/ /g, '%20');
      break;
    case 'Apache License 2.0':
      return `https://img.shields.io/badge/license-${license}-yellow`.replace(/ /g, '%20');
      break;
    case 'Boost Software Lisense 1.0':
      return `https://img.shields.io/badge/license-${license}-green`.replace(/ /g, '%20');
    default:
      return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

  
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

  
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License Badge](${renderLicenseBadge(data.license)})
  # ${data.title} \n

  ## Description: \n ${data.description} \n

  ## Table of Contents \n  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [License](#license)
    
  ## Installation \n 
  ${data.installation} \n

  ## Usage \n 
  ![Photo/Video](${data.usage}) \n

  ## Contributors \n 
  ${data.contribute} \n

  ## Testing \n 
  ${data.test} \n


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
