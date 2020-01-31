//use inquirer to ask questions

//dependencies
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employeeClass");
const Manager = require("./lib/managerClass");
const Intern = require("./lib/internClass");
const Engineer = require("./lib/engineerClass");

const writeFile = require("./app");

let count = 0;

//ask for manager info first
//make new manager object
//put manager info in txt file

//ask for team member role, name, id
//switch based on role, ask for role info
//make intern or engineer object
//put into txt file
//ask if done
//either repeat or end

//ask for manager info first
const getManager = () => {
  try {
    inquirer.prompt([
      {
        type:"input",
        message: "Enter manager name",
        name: "name"
      },
      // {
      //   type:"list",
      //   message: "Select role",
      //   name: "role",
      //   choices: [
      //     "Engineer",
      //     "Intern",
      //     "Manager"
      //   ]
      // },
      {
        type:"input",
        message: "Enter email",
        name: "email"
      },
      {
        type:"input",
        message: "Enter office number",
        name: "officeNum"
      }
    ]).then((response) => {
      //return manager info
      let name = response.name;
      let role = "manager";
      count++;
      let id = count;
      let officeNum = response.officeNum;

      makeMan(name, role, id, officeNum);
      
    });
  } catch (err) {
    console.log("Error with inquirer");
  }
}

getManager();

const makeMan = (name, role, id, officeNum) => {
  //make new manager obj
  const newMan = new Manager(name, role, id, officeNum);

  writeMan(newMan);
}

const writeMan = (newMan) => {
  fs.appendFile("team.txt", newMan, (err) => {
    if(err) {
      console.log("Error with writing file");
    }
  });
}
// writeFile();

module.exports = ask;