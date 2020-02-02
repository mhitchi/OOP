//Intern class
// extends Employee
// school, getSchool(), getRole()*overridden to return 'Intern'*

//dependencies
const Employee = require('./employeeClass');
//const Manager = require('./managerClass');
const fs = require("fs");

class Intern extends Employee {
  constructor(name, title, id, email, school) {
    super(name, title, id, email)
    this.name = name;
    this.title = "Intern";
    this.id = id;
    this.email = email;
    this.school = school;
  };

  getRole() {
    return this.title;
  };

  getSchool() {
    return this.school;
  };
  
  //add to team.txt file
  appendToFile() {
    console.log("appending to file");
    const txt = 
      `${this.title}: ${this.name} \n
      ID: ${this.id} \n
      Email: ${this.email} \n
      School: ${this.school}\n
      ----------------------------\n`;

    //append team.txt with txt defined above
    fs.appendFile(`./output/team.txt`, txt, "utf8", (err) => {
      if (err) throw err;
    })
  }
}

module.exports = Intern;