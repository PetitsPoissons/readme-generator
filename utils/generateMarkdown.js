const licenses = require('./licenses');

//function to generate the table of contents
const tableContents = data => {
  let output = `* [License](#license)
  * [Installation](#installation)
  `;
  if (data.usage !== '') {
    output += `* [Usage](#usage)
  `;
  }
  output += `* [Tests](#tests)
  `;
  if (data.confirmCredits) {
    output += `* [Credits](#credits)
  `;
  }
  output += `* [Contributing](#contributing)
  * [Contact](#contact)`;
return output;
};

// function to generate the 'Usage' section
const generateUsage = usage => {
  if (usage === '') {
    return usage;
  } else {
    return `
  ## Usage
    
  ${usage}
`;
  }
};

// function to generate 'Credits' section
const generateCredits = data => {
  if (data.confirmCredits) {
    const creditsArr = data.credits.map(({ creditName, creditLink }) => {
      return `* [${creditName}](${creditLink})
  `;
    });
    return `
  ## Credits

  ${creditsArr.join('')}`;
  } else {
    return ``;
  }
};

// function to generate the 'Contributing' section
const generateContributing = contributing => {
  if (contributing === 'Contributor Covenant') {
    return `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`;
  } else {
    return `
  ${contributing}`;
  }
};

// function to generate the email in the 'Contact' section
const generateEmail = data => {
  if (data.confirmEmail) {
    return `
  Email with questions or comments at ${data.email}.<br>`;
  } else {
    return ``;
  }
};

// function to generate markdown for README
const generateMarkdown = data => {
  return `${licenses[data.license][1]}
  # ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents

  ${tableContents(data)}
    
  ## License

  ${licenses[data.license][0]}
    
  ## Installation

  To install the dependencies, type \`  ${data.installation}  \` at the command line.
  ${generateUsage(data.usage)}
  ## Tests

  To run tests, type \`  ${data.testing}  \` at the command line.
  ${generateCredits(data)}
  ## Contributing

  ${generateContributing(data.contributing)}

  ## Contact
  ${generateEmail(data)}
  Check out other projects at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
