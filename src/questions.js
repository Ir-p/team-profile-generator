module.exports = {
  managerQuestions: [
    {
      type: "input",
      name: "nameManager",
      message: "Please enter your Manager name.",
    },
    {
      type: "input",
      name: "idManager",
      message: "Please enter your Manager ID.",
    },
    {
      type: "input",
      name: "emailManager",
      message: "Please enter your Manager email.",
    },
    {
      type: "input",
      name: "officeNumberManager",
      message: "Please enter your Manager office number.",
    },
  ],

  internQuestions: [
    {
      type: "input",
      name: "nameIntern",
      message: "Please enter your Intern name.",
    },
    {
      type: "input",
      name: "idIntern",
      message: "Please enter your Intern ID.",
    },
    {
      type: "input",
      name: "emailIntern",
      message: "Please enter your Intern email.",
    },
    {
      type: "input",
      name: "schoolIntern ",
      message: "Please enter your Intern school.",
    },
  ],

  engineerQuestions: [
    {
      type: "input",
      name: "nameEngineer",
      message: "Please enter your Engineer name.",
    },
    {
      type: "input",
      name: "idEngineer",
      message: "Please enter your Engineer ID.",
    },
    {
      type: "input",
      name: "emailEngineer",
      message: "Please enter your Engineer email.",
    },
    {
      type: "input",
      name: "githubEngineer",
      message: "Please enter your Engineer github.",
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
