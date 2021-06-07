module.exports = {
  managerQuestions: [
    {
      type: "input",
      name: "name",
      message: "Please enter your Manager name.",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your Manager ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your Manager email.",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your Manager office number.",
    },
  ],

  internQuestions: [
    {
      type: "input",
      name: "name",
      message: "Please enter your name.",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email.",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter your school.",
    },
  ],

  engineerQuestions: [
    {
      type: "input",
      name: "name",
      message: "Please enter your name.",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub URL.",
    },
  ],

  mainMenuQuestions: [
    {
      type: "list",
      name: "nextMove",
      message: "What would you like to do next",
      choices:["Add another Intern", "Add another engineer", "All done"]
    },
  ]
};
