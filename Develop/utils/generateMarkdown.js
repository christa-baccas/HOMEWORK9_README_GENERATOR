// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return varName

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.repo} \n
  # ${data.title} \n
  # Description: ${data.description} \n
  # Installation Process: ${data.installation} \n
  # License: ${data.license} \n
  # Contributors: ${data.contribute} \n
  # Testing: ${data.test} \n
  # Questions: ${data.contact} \n
`;
}
// exported
module.exports = generateMarkdown;
