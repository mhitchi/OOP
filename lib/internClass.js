//Intern class
// extends Employee
// school, getSchool(), getRole()*overridden to return 'Intern'*

//dependencies
const Employee = require('./employeeClass');

class Intern extends Employee {
  constructor(school) {
    super(name, id, title, school)
    this.school = school;
  };
  
  getSchool() {

  };

  getRole() {

  }
}