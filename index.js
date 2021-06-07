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
  const { nextMove } = await promptUser(questions.mainMenuQuestions);
  console.log(nextMove);
  switch (nextMove.toLowerCase()) {
    //generate Engineer
    case "add another intern":
      return promptIntern();
    // generate Intern
    case "add another engineer":
      return promptEngineer();
    // default
    default:
      return buildHtmlString(htmlTeamArray);
  }
}

async function promptEngineer() {
  console.log("promptEngineer");
  const engineerAnswers = await promptUser(questions.engineerQuestions);
  const engineerParams = Object.values(engineerAnswers);
  const engineerObj = new Engineer(...engineerParams);
  const cardString = generateEmployeeString(engineerObj);
  htmlTeamArray.push(cardString);
  mainMenu();
}

// push to htmlCard Array
async function promptIntern() {
  console.log("promptIntern");
  const internAnswers = await promptUser(questions.internQuestions);
  const internParams = Object.values(internAnswers);
  const internObj = new Intern(...internParams);
  const cardString = generateEmployeeString(internObj);
  htmlTeamArray.push(cardString);
  mainMenu();
}

function generateEmployeeString(employeeObj) {
  return `
    <div class="card" style = "width: 15rem">
      <div>
        <h2 style = "background-color: yellowgreen">${employeeObj.name}</h2>
          <h3 style = "background-color: yellowgreen">Role: ${employeeObj.getRole()}</h3>
      </div>
          <ul>
            <li>ID: ${employeeObj.getId()}</li>
            <li>Email:<a href="mailto:${employeeObj.getEmail()}">${employeeObj.getEmail()}</a></li>
            <li>Office Number: ${employeeObj.officeNumber}</li>
          </ul>
    </div>
    `;
}

// build htmlString

function buildHtmlString(cardArray) {
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
            ${cardArray.join("")}
          </main>
        </div>
        </body>
        </html>`;

  // Save, and then, process
  saveHtml(htmlString);
}

// save string to index.html
function saveHtml(str){
  const htmlPageContent = str
  fs.writeFile('index.html', htmlPageContent, (e) =>
  e ? console.log(e) : open ("index.html"))
}

// 🚀 start

init();
