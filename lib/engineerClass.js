//Engineer class
// extends Employee
// github *username*, getGithub(), getRole()*overridden to return 'Engineer'*

//dependencies
const Employee = require('./employeeClass');
const fs = require("fs");

class Engineer extends Employee {
  constructor(name, title, id, email, github) {
    super(name, title, id, email)
    this.name = name;
    this.title = "Engineer";
    this.id = id;
    this.email = email;
    this.github = github;
  };
  
  appendToFile() {
    console.log("appending to file");
    const txt = 
      `${this.title}: ${this.name} \n
      ID: ${this.id} \n
      Email: ${this.email} \n
      Github: ${this.github}\n
      ----------------------------\n`;

    fs.appendFile("./output/team.txt", txt, "utf8", (err) => {
      if (err) throw err;
    })
  }
}

module.exports = Engineer;