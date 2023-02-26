const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer
    .prompt([
      { type: "input", name: "title", message: "TITLE" },
      { type: "input", name: "description", message: "DESCRIPTION" },
    ])
    .then((data) => {
      console.log(generateMarkdown(data));
    });
}

// function call to initialize program
init();
