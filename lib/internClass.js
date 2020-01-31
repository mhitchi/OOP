//Intern class
// extends Employee
// school, getSchool(), getRole()*overridden to return 'Intern'*

//dependencies
const Employee = require('./employeeClass');
const fs = require("fs");

class Intern extends Employee {
  constructor(name, id, email, title, school) {
    super(name, id, email, title)
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Intern";
    this.school = school;
  };
  
  appendToFile() {
    console.log("appending to file");
    const txt = 
      `${this.title}: ${this.name} \n
      ID: ${this.id} \n
      Email: ${this.email} \n
      School: ${this.school}\n
      ----------------------------\n`;

    fs.appendFile("./output/team.txt", txt, "utf8", (err) => {
      if (err) throw err;
    })
  }
}

module.exports = Intern;