// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

## Description

${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

This project is licensed under the [${data.license} License](https://choosealicense.com/licenses/).

## Questions

Should you have any queries regarding this project, here is how you can reach me:

- [${data.github}](https://github.com/${data.github})
- ${data.email}
`;
}

module.exports = generateMarkdown;
