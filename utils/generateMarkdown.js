// function to generate markdown for README
const generateMarkdown = data => {
  return `
    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
`;
}

module.exports = generateMarkdown;

// const fs = require("fs");

// fs.writeFile("log.txt", process.argv[2], function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Done!");

// });

// fs.readFile("log.txt", "utf8", function(error, log) {

//   if (error) {
//     return console.log(error);
//   }
  
//   console.log(log);
  
//   });
