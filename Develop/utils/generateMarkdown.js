// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '# ${data.License}'
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '# ${data.License}'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '# ${data.License}'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  -[Description](#description)
  -[Usage](#usage)
  -[Installation]($installation)
  -[Contribution]($contribution)
  -[License](#license)
  -[Testing]($testing)
  -[Contact Information]($contact-information)

  ## Description
  $(data.Description)
  ## Usage
  $(data.Usage)
  ## Installation
  $(data.Installation)
  ## Contribution
  $(data.Contribution)
  ## License
  $(data.License)
  ## Testing
  $(data.Testing)
  ## Contact Information
  -Email: [${data.Email}](mailto:user@example.com)

`;
}

module.exports = generateMarkdown;
