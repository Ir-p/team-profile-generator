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
      message: "Please enter your Manager's ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your Manager's email.",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your Manager's office number.",
    },
  ],

  internQuestions: [
    {
      type: "input",
      name: "name",
      message: "Please enter Intern name.",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter Intern's ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Intern's email.",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter Intern's school.",
    },
  ],

  engineerQuestions: [
    {
      type: "input",
      name: "name",
      message: "Please enter Engineer name.",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter Engineer's ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Engineer's email.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter Engineer's GitHub username.",
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
