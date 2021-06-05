const fs = require("fs");
const path = require("path");
const { prompt: promptUser } = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const questions = require("./src/questions.js");

const htmlTeamArray = [];

async function init() {
  // generate Manager
  // ask questions
  const managerAnswers = await promptUser(questions.managerQuestions);
  const managerParams = Object.values(managerAnswers);
  const managerObj = new Manager(...managerParams);
  // render new manager based on object props
  const cardString = generateEmployeeString(managerObj);
  // push to htmlCard Array
  htmlTeamArray.push(cardString);
  // back to mainMenu
  mainMenu();
}
async function mainMenu() {
  // mainMenu questions
  const {nextMove} = await promptUser(questions.mainMenuQuestions);
  console.log(nextMove);
  switch (nextMove.toLowerCase()) {
    //generate Engineer
    case "add another intern":
      return promptIntern();
    // generate Intern
    case "add another engineer":
      return promptEngineer();
    // bye
    default:
      return buildHtmlString(htmlTeamArray);
  }
}

async function promptEngineer() {
    console.log("promptEngineer")
  const engineerAnswers = await promptUser(questions.engineerQuestions);
  const engineerParams = Object.values(engineerAnswers);
  const engineerObj = new Engineer(...engineerParams);
  const cardString = generateEmployeeString(engineerObj);
  htmlTeamArray.push(cardString);
  mainMenu();
}

async function promptIntern() {
    console.log("promptIntern")
  const internAnswers = await promptUser(questions.internQuestions);
  const internParams = Object.values(internAnswers);
  const internObj = new Intern (...internParams);
  const cardString = generateInternString(internObj);
  htmlTeamArray.push(cardString);
  mainMenu();
}

function generateEmployeeString(employeeObj) {
  return `
    <div>
        <h2>${employeeObj.name}</h2>

        <p>Role: ${employeeObj.getRole()}</p>
    </div>
    `;
}
// generate Intern
// ask questions
// render new manager based on object props
// push to htmlCard Array
// back to mainMenu

// generate Engineer
// ask questions
// render new manager based on object props
// push to htmlCard Array
// back to mainMenu

// build htmlString

function buildHtmlString(htmlCardArray) {
  const htmlString = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
          <title>Document</title>
        </head>
        <body>
          <main class="container">
            ${htmlCardArray.join("")}
          </main>
        </div>
        </body>
        </html>`;

  // Save, and then, process
  saveHtml(htmlString);
}

function saveHtml(str) {
  console.log(str);
}
// save string to index.html

//create a manager
// ask
// generate html string from answers, and push to complete team
//ask for
// switch
// intern
// engineer
// done
//

// 🚀 start

init();

// Tutoring session

// Question objects contain questions for prompts

// Add manger function

//switch case function
// who to add? Intern? Engineer? Done?

// Add Intern function

// Add Engineer function

// Build html function
