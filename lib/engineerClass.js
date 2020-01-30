//Engineer class
// extends Employee
// github *username*, getGithub(), getRole()*overridden to return 'Engineer'*

//dependencies
const Employee = require('./employeeClass');

class Engineer extends Employee {
  constructor(github) {
    super(name, id, title, github)
    this.github = github;
  };
  
  getGithub() {

  };

  getRole() {

  }
}