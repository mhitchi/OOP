//Engineer class
// extends Employee
// github *username*, getGithub(), getRole()*overridden to return 'Engineer'*

//dependencies
const Employee = require('./employeeClass');
const fs = require("fs");

class Engineer extends Employee {
  constructor(name, id, email, title, github) {
    super(name, id, email, title)
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Engineer";
    this.github = github;
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

module.exports = Engineer;