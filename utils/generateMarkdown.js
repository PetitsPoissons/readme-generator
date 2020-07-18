// function to generate the 'Usage' section
const generateUsage

// function to generate 'Credits' section
const generateCredits = data => {
  if (data.credits && data.credits !== []) {
    return `
      ## Credits

      ${creditsArr.map(({ creditName, creditLink }) => {
        return `
          - [${creditName}](${creditLink})
        `
      })}
    `;
  } else {
    return ``;
  }
};

// function to generate the 'Contributing' section
const generateContributing = data => {
  if (data.contributing === 'Contributor Covenant') {
    return `
      ## Contributing

      Please see [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) for standard guidelines to contribute.
    `;
  } else {
    return `
      ## Contributing

      ${data.contributing}
    `;
  }
};

// function to generate the 'Tests' section
const generateTests = data => {
  if (data.testing === '') {
    return data.testing;
  } else {
    return `
      ## Tests

      To run tests, type \`${data.testing}\` at the command line.
    `;
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
  return `
    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Badges](#badges)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Contact](#contact)
    
    ## Installation

    ${data.installation}

    ${generateUsage(data)}

    ${generateCredits(data)}    

    ## License

    ${data.license}

    ## Badges

    TO BE DEVELOPED

    ${generateContributing(data)}

    ${generateTests(data)}

    ## Contact

    ${generateEmail(data)}
    Check out my other projects at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
