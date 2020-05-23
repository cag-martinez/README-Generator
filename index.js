var inquirer = require("inquirer");
var fs = require('fs');
//var data =process.argv[2];

inquirer.prompt([
{
    type: "input",
    message:"What is the name of your project?",
    name: "title",
},
{
    type: "list",
    message: "Which badge would you like to use?",
    name: "badge",
    choices: ["[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)",
              "https://img.shields.io/github/license/cag-martinez/README-Generator?style=plastic",
            ]
},
{
    type: "input",
    message: "Write a brief description of your project:",
    name: "description",
},
{
    type:"confirm",
    message: "Add table of contents?",
    name: "contents",
    default: true
},
{
    type:"input",
    message: "What are the steps required to install your project? Provide a step-by-step description.",
    name: "installation",
},
{
    type: "input",
    message: "Provide instructions for usage.",
    name: "usage",
},
{
    type: "list",
    message: "License?",
    name: "license",
    choices:[
        {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZW1pdA=="
        },
        {
          "key": "lgpl-3.0",
          "name": "GNU Lesser General Public License v3.0",
          "spdx_id": "LGPL-3.0",
          "url": "https://api.github.com/licenses/lgpl-3.0"
        },
        {
          "key": "mpl-2.0",
          "name": "Mozilla Public License 2.0",
          "spdx_id": "MPL-2.0",
          "url": "https://api.github.com/licenses/mpl-2.0"
        },
        {
          "key": "agpl-3.0",
          "name": "GNU Affero General Public License v3.0",
          "spdx_id": "AGPL-3.0",
          "url": "https://api.github.com/licenses/agpl-3.0"
        },
        {
          "key": "unlicense",
          "name": "The Unlicense",
          "spdx_id": "Unlicense",
          "url": "https://api.github.com/licenses/unlicense"
        },
        {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdx_id": "Apache-2.0",
          "url": "https://api.github.com/licenses/apache-2.0"
        },
        {
          "key": "gpl-3.0",
          "name": "GNU General Public License v3.0",
          "spdx_id": "GPL-3.0",
          "url": "https://api.github.com/licenses/gpl-3.0"
        }
      ],
},
{
    type: "confirm",
    message: "Contributing?",
    name: "contributing",
},
{
    type: "input",
    message: "Test examples:",
    name: "tests",
},
{
    type: "input",
    message: "Please provide github picture if any",
    name: "picture",
},
{
    type: "input",
    message: "Email address",
    name: "email",
},

])
.then(function(answers) {
    console.log(answers);
    var filename = answers.title.split(" ").join("_").toLowerCase()+ ".md"

    function tableOfContents(){
        if (answers.contents === true) {
            return ` 
            ### Table of contents
            * Installtion
            * usage
            * Liscence
            * Contributing
            * Tests
            `
        }
        return ``
    }

    var readME =`
    # Title 
    ${answers.title}

    ### Badges 
    ${answers.badge}

    ### Description 
    ${answers.description}

    ${tableOfContents()}

    ### Installation 
    ${answers.installation}

    ### Usage 
    ${answers.usage}

    ### License 
    ${answers.license}

    ### Contributing 
    ${answers.contributing}

    ### Tests 
    ${answers.tests}

    ### Users GitHub profile picture 
    ${answers.picture}
    
    ### Users Github email 
    ${answers.email}
    `

    fs.writeFile(filename, readME, function(err) {
        if (err) {
        return console.log(err);
        }
        console.log("answers saved in" + filename + "!");    
    });
});


// function writeToFile("generateMarkdown.js", data) {
// }

// function init() {

// }

// init();





//console.log(JSON.stringify(answers, null, '  '));
// inquirer.prompt(questions).then(answers => {
//  console.log('\ninput:');
//   console.log(JSON.stringify(answers, null, '  '));
// });

// module.exports = {
//     questions: questions,
// };