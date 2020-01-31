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

      const getRoleInfo = (infoType) => {
        inquirer.prompt(
          {
          type:"input",
          message: `Enter your ${infoType}`,
          name: "roleInfo"
          }
          );
        };
      //tolowercase
      //based on role, ask for role info: school, github, office number
      switch(response.role.toLowerCase()) {
        case "engineer":
          getRoleInfo("GitHub username");
          break;
        case "manager":
          getRoleInfo("office number");
          break;
        case "intern":
          getRoleInfo("school name");
          break;
        default:
      }
    });
  } catch (err) {
    console.log("Error with inquirer");
  }
}

ask();

module.exports = ask;