//** TODO:*/
//** Make sure manager's E-mail is being generated */
//** Create prompt for adding additional roles */
//** Confirm constructors are creating objects properly for additional employees */
//** Output to text file (format output so it is legible) */
//dependencies
//use inquirer to ask questions
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employeeClass");
const Manager = require("./lib/managerClass");
const Intern = require("./lib/internClass");
const Engineer = require("./lib/engineerClass");
const writeFile = require("./app");
//**Dan: Added this comment for me. Count for assigning ID number */
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
    inquirer.prompt([
      {
        type:"input",
        message: "Enter manager name",
        name: "name"
      },
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
      let role = "Manager";
      let email = response.email;
      count++;
      //TODO returning undefined
      let id = count;
      let officeNum = response.officeNum;
      makeMan(name, role, id, email, officeNum);
    });
}

const makeMan = (name, role, id, email, officeNum) => {
  //make new manager obj
  const newMan = new Manager(name, role, id, email, officeNum);

  console.log(newMan.name, newMan.role, newMan.id, newMan.email, newMan.officeNum)

  writeMan(newMan);
}
// writeFile();
const writeMan = (newMan) => {
  fs.appendFile("team.txt", (`${newMan.name}, ${newMan.role}, ${newMan.id}, ${newMan.email}, ${newMan.officeNum}`), (err) => {
    if(err) {
      console.log("Error with writing file");
    }
  });
}
// start program and get Manager information
getManager();