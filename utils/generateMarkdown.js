// // function to generate credits section
// const generateCredits = creditsArr => {
//   return `
//     Credits should be attributed to:
//   `
// }

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

    ## Usage

    ${data.usage}
    SHOULD I ADD A STEP BY STEP PROCEDURE?

    ## Credits

    ${data.credits.map(({ creditName, creditLink }) => {
      return `
        - [${creditName}](${creditLink})
      `
    })}

    ## License

    ${data.license}

    ## Badges

    TO BE DEVELOPED

    ## Contributing

    ${data.contributing}

    ## Tests

    You can run tests with the following command:
    ${data.testing}

    ## Contact

    Email me with your questions or comments at ${data.email}.
    Check out my other projects at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
