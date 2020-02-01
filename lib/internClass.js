//Intern class
// extends Employee
// school, getSchool(), getRole()*overridden to return 'Intern'*

//dependencies
const Employee = require('./employeeClass');
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