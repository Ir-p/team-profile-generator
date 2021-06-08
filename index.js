const fs = require("fs");
const path = require("path");
const { prompt: promptUser } = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const questions = require("./src/questions.js");
const open = require("open");

const htmlTeamArray = [];

async function init() {
  // generate Manager
  // ask questions
  const managerAnswers = await promptUser(questions.managerQuestions);
  const managerParams = Object.values(managerAnswers);
  const managerObject = new Manager(...managerParams);
  // render new manager based on object props
  const cardString = generateManagerString(managerObject);
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

// push to Engineer htmlCard Array
async function promptEngineer() {
  console.log("promptEngineer");
  const engineerAnswers = await promptUser(questions.engineerQuestions);
  const engineerParams = Object.values(engineerAnswers);
  const engineerObj = new Engineer(...engineerParams);
  const cardString = generateEngineerString(engineerObj);
  htmlTeamArray.push(cardString);
  mainMenu();
}

// push to Intern htmlCard Array
async function promptIntern() {
  console.log("promptIntern");
  const internAnswers = await promptUser(questions.internQuestions);
  const internParams = Object.values(internAnswers);
  const internObj = new Intern(...internParams);
  const cardString = generateInternString(internObj);
  htmlTeamArray.push(cardString);
  mainMenu();
}

// create html section for Manager answers
function generateManagerString(manager) {
  return `
    <section class="card" style = "width: 17rem">
      <h2>${manager.name}</h2>
        <h3>${manager.getRole()}</h3>
        <ul>
          <li>ID: ${manager.getId()}</li>
          <li>Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li>Office Number: ${manager.officeNumber}</li>
        </ul>
    </section>
    `;
};

// create html section for Engineer answers
function generateEngineerString(engineer) {
  return `
    <section class="card" style = "width: 17rem">
      <h2>${engineer.name}</h2>
        <h3>${engineer.getRole()}</h3>
          <ul>
            <li>ID: ${engineer.getId()}</li>
            <li>Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li>Github Link:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
          </ul>
    </section>
    `;
};

// create html section for Intern answers
function generateInternString(intern) {
  return `
    <section class="card" style = "width: 17rem">
      <h2>${intern.name}</h2>
        <h3>${intern.getRole()}</h3>
          <ul>
            <li>ID: ${intern.getId()}</li>
            <li>Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li>School: ${intern.school}</li>
          </ul>
    </section>
    `;
};

// build htmlString
function buildHtmlString(cardArray) {
  const htmlString = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
          <link rel="stylesheet" type="text/css" href="assets/css/style.css"/>
          <title>Document</title>
        </head>
        <body>
          <main class="container">
            <h1>My Team</h1>
              <section class="flex-row">
                ${cardArray.join("")}
              </section>
          </main>
        </body>
        </html>`;

  // render index.html
  renderHtml(htmlString);
}

// render string to index.html
function renderHtml(str){
  const htmlPageContent = str
  fs.writeFile('index.html', htmlPageContent, (e) =>
  e ? console.log(e) : open ("index.html"))
}

// 🚀 start
init();
