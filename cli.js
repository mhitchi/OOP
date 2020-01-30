//use inquirer to ask questions

//dependencies
const inquirer = require("inquirer");

const ask = () => {
  try {
    inquirer.prompt([
      {
        type:"input",
        message: "Enter your name",
        name: "name"
      },
      {
        type:"input",
        message: "Enter your role",
        name: "role"
      },
      {
        type:"input",
        message: "Enter your email",
        name: "email"
      },
      {
        type:"input",
        message: "Enter your id",
        name: "id"
      },
    ]).then((response) => {
      //tolowercase
      //based on role, ask for role info: school, github, office number
      switch(response.role.toLowerCase()) {
        case "engineer":
          break;
        case "manager":
          break;
        case "intern":
          break;
        default:
      }
    });
  } catch (err) {
    console.log("Error with inquirer");
  }
}

module.exports = ask;