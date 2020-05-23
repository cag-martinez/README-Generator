var inquirer = require("inquirer");
var fs = require('fs');
var data =process.argv[2];

inquirer
.prompt([
    {
    type: "input",
    message:"What is the name of your project?",
    name: "title",
},
{
    type: "inmput",
    message: "Write a brief description of your project:",
    name: "description",
},
{
    type:"confirm",
    message: "Add table of contents?",
    name: "table of contents"
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
    type: "confirm",
    message: "License?",
    name: "license",
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
    name: "email"
},
])
// const questions = [

// ];

.then(function(answers){
    fs.writeToFile("markdown.md", data, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('answers saved in markdown.md');
});

});
