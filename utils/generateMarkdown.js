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
  if (data.credits !== '') {
    output += `* [Credits](#credits)
  `;
  }
  output += `* [Contributing](#contributing)
  * [Contact](#contact)`;
return output;
};

// function to generate the 'Usage' section
const generateUsage = data => {
  if (data.usage === '') {
    return data.usage;
  } else {
    return `
  ## Usage
    
  ${data.usage}
`;
  }
};

// function to generate 'Credits' section
const generateCredits = data => {
  if (data.credits && data.credits !== []) {
    return `
  ## Credits
    
  ${data.credits.map(({ creditName, creditLink }) => {
    return `- [${creditName}](${creditLink})
  `;
  })}`;
  } else {
    return ``;
  }
};

// function to generate the 'Contributing' section
const generateContributing = data => {
  if (data.contributing === 'Contributor Covenant') {
    return `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`;
  } else {
    return `
  ${data.contributing}`;
  }
};

// function to generate the email in the 'Contact' section
const generateEmail = data => {
  if (data.email === '') {
    return data.email;
  } else {
    return `
  Email with questions or comments at ${data.email}.
  `;
  }
};

// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents

  ${tableContents(data)}
    
  ## License

  ${data.license}
    
  ## Installation

  To install the dependencies, type \`${data.installation}\` at the command line.
  ${generateUsage(data)}
  ## Tests

  To run tests, type \`${data.testing}\` at the command line.
  ${generateCredits(data)}
  ## Contributing

  ${generateContributing(data)}

  ## Contact
  ${generateEmail(data)}
  Check out other projects at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
