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
    
    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}
    SHOULD I ADD A STEP BY STEP PROCEDURE?

    ## Credits

    TO BE DEVELOPED

    ## License

    ${data.license}

    ## Badges

    TO BE DEVELOPED

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

`;
}

module.exports = generateMarkdown;
