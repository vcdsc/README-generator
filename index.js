const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// vcdsc: this is so the newly generated README file is placed in a separate folder, in this case sampleREADME
const filePath = path.join(__dirname, "./sampleREADME/README.md");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    // we need to validate user input, as we do not want to end up with an empty README
    validate(text) {
      if (!text.length) {
        return "Sorry, this cannot be empty. Please enter a project name.";
      }
      return true;
    },
    waitUserInput: true,
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project.",
    validate(text) {
      if (!text.length) {
        return "Sorry, this cannot be empty. Please enter a short project description.";
      }
      return true;
    },
    waitUserInput: true,
  },
  {
    type: "input",
    name: "installation",
    message:
      "If your project has specific installation instructions, please add them here.",
  },

  {
    type: "input",
    name: "usage",
    message:
      "If there are any usage examples that might be useful to others, please add them here.",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "If others want to contribute to your project, how can they do so?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "If you wrote tests for your project, provide examples and how to run them here.",
  },
  {
    type: "list",
    name: "license",
    message: "What type of License to you wish to add to this project?",
    choices: ["MIT", "Apache", "GPL"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Your README is now ready! :)")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    const content = generateMarkdown(data);
    return writeToFile(filePath, content);
  });
}

// function call to initialize program
init();
