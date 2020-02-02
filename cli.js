//** TODO:*/
//** Make sure manager's E-mail is being generated */

//dependencies
//use inquirer to ask questions
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employeeClass");
const Manager = require("./lib/managerClass");
const Intern = require("./lib/internClass");
const Engineer = require("./lib/engineerClass");

//**Dan: Added this comment for me. Count for assigning ID number */
let count = 0;

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
      let title = "Manager";
      let email = response.email;
      let id = count;
      let officeNum = response.officeNum;

      //call function to make new manager obj
      makeMan(name, title, id, email, officeNum);
    });
}

const makeMan = (name, title, id, email, officeNum) => {
  //make new manager obj
  const newMan = new Manager(name, title, id, email, officeNum);

  //call writeFile function from manager class
  newMan.writeToFile()

  //call function to get employee info
  getEmployee();
}

//get employee info
const getEmployee = () => {
  inquirer.prompt([
    {
      type:"input",
      message: "Enter team member name: ",
      name: "name"
    },
    {
      type:"input",
      message: "Enter team member email: ",
      name: "email"
    },
    {
      type:"list",
      message: "Pick team member's title: ",
      name: "title",
      choices: [
        "engineer",
        "intern"
      ]
    }
  ]).then((response) => {
    //return employee info
    let name = response.name;
    let title = response.title;
    count++;
    let id = count;
    let email = response.email;

    //call function to get info based on title
    getTitleInfo(name, title, id, email);

  });

  //get info based on title
  const getTitleInfo = (name, title, id, email) => {
    switch(title) {
      case "engineer":
        //if engineer, call function to ask for github
        ask(name, title, id, email, "Github url");
        break;
      case "intern":
        //if intern, call function to ask for school
        ask(name, title, id, email, "school");
        break;
    }
  }

  //ask for info based on title
  const ask = (name, title, id, email, infoType) => {
    inquirer.prompt(
      {
      type:"input",
      message: `Enter your ${infoType}: `,
      name: "titleInfo"
      }).then((response) => {
        let titleInfo = response.titleInfo;

        //call function to ask if the user is finished building their team
        askIfDone(name, title, id, email, titleInfo);
    });
  }

  //ask if the user is finished building their team
  const askIfDone = (name, title, id, email, titleInfo) => {
    inquirer.prompt(
      {
        type: "list",
        message: "Are you finished?",
        name: "finished",
        choices: [
          "Yes",
          "No"
        ]
      }).then((response) => {
        const finished = response.finished;

        //if not finished, repeat getEmployee process
        if( finished === "No" ) {
          console.log("Keep building your team");
          getEmployee();
        } else {
          console.log("Checkout your team in team.txt");
        }
      });

    //call function to make engineer or intern
    makeMember(name, title, email, id, titleInfo)
  }
}

//make engineer or intern
const makeMember = (name, title, email, id, titleInfo) => {
  let newMember;

  switch(title) {
      case "engineer":
        //if engineer, make new engineer
        newMember = new Engineer(name, title, id, email, titleInfo)
        //write new engineer to team.txt
        newMember.appendToFile();
        break;
      case "intern":
        //if intern, make new intern
        newMember = new Intern(name, title, id, email, titleInfo)
        //write new intern to team.txt
        newMember.appendToFile();
        break;
    }
}

// start program and get Manager information
getManager();