//Engineer class
// extends Employee
// github *username*, getGithub(), getRole()*overridden to return 'Engineer'*

//dependencies
const Employee = require('./employeeClass');

class Engineer extends Employee {
  constructor(name, id, email, title, github) {
    super(name, id, email, title)
    this.github = github;
  };
  
  getGithub() {

  };

  getRole() {

  }
}

module.exports = Engineer;