//Manager class
// extends Employee
// officeNumber, getRole()*overridden to return 'Manager'*
//dependencies
const Employee = require('./employeeClass');
const fs = require("fs");

class Manager extends Employee {
  constructor(name, title, id, email, officeNum) {
    super(name, title, id, email)
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Manager";
    this.officeNum = officeNum;
  }
  
  writeToFile() {
    console.log("writing to file");
    const txt = 
      `Team:\n
      ****************************\n
      ${this.title}: ${this.name} \n
      ID: ${this.id} \n
      Email: ${this.email} \n
      Office Number: ${this.officeNum}\n
      ----------------------------\n`;

    fs.writeFile("./output/team.txt", txt, "utf8", (err) => {
      if (err) throw err;
    })
  }
}
module.exports = Manager;