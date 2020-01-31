//Intern class
// extends Employee
// school, getSchool(), getRole()*overridden to return 'Intern'*

//dependencies
const Employee = require('./employeeClass');

class Intern extends Employee {
  constructor(name, id, email, title, school) {
    super(name, id, email, title)
    this.school = school;
  };
  
  getSchool() {

  };

  getRole() {

  }
}

module.exports = Intern;