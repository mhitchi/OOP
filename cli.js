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
//make new manager object
//put manager info in txt file
//ask for team member title, name, id
//switch based on title, ask for title info
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
      let title = "Manager";
      let email = response.email;
      let id = count;
      let officeNum = response.officeNum;
      makeMan(name, title, id, email, officeNum);
    });
}

const makeMan = (name, title, id, email, officeNum) => {
  //make new manager obj
  const newMan = new Manager(name, title, id, email, officeNum);

  // console.log(newMan.name, newMan.title, newMan.id, newMan.email, newMan.officeNum)

  //writeMan(newMan);
  //call writeFile function from manager class
  //TODO not working
  newMan.writeToFile()

  getEmployee();
}

//get employees
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
    //return manager info
    let name = response.name;
    let title = response.title;
    count++;
    let id = count;
    let email = response.email;

    getTitleInfo(name, title, id, email);

  });

  //get info based on title
  //get info based on title
  const getTitleInfo = (name, title, id, email) => {
    switch(title) {
      case "engineer":
        ask(name, title, id, email, "Github url");
        break;
      case "intern":
        ask(name, title, id, email, "school");
        break;
    }
  }

  //engineer or intern inquirer questions
  const ask = (name, title, id, email, infoType) => {
    inquirer.prompt(
      {
      type:"input",
      message: `Enter your ${infoType}: `,
      name: "titleInfo"
      }).then((response) => {
        let titleInfo = response.titleInfo;
        //TODO add shit to txt file

        //console.log (name, title, id, email, titleInfo);
        askIfDone(name, title, id, email, titleInfo);
    });
  }

    //ask if they're done building the team yet
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

        if( finished === "No" ) {
          console.log("Keep building your team");
          getEmployee();
        } else {
          console.log("Checkout your team in team.txt");
        }
      });
    makeMember(name, title, email, id, titleInfo)
  }
}

//make engineer or intern
const makeMember = (name, title, email, id, titleInfo) => {
  let newMember;

  switch(title) {
      case "engineer":
        newMember = new Engineer(name, title, id, email, titleInfo)
        //TODO not working
        newMember.appendToFile();
        break;
      case "intern":
        newMember = new Intern(name, title, id, email, titleInfo)
        //TODO not working
        newMember.appendToFile();
        break;
    }
}

// start program and get Manager information
getManager();