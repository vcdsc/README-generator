const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// vcdsc: this is so the newly generated README file is placed in a separate folder
const filePath = path.join(__dirname, "./sampleREADME/README.md");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Your README is now ready! :)")
  );
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      { type: "input", name: "title", message: "TITLE" },
      { type: "input", name: "description", message: "DESCRIPTION" },
    ])
    .then((data) => {
      const content = generateMarkdown(data);
      return writeToFile(filePath, content);
    });
}

// function call to initialize program
init();
