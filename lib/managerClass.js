//Manager class
// extends Employee
// officeNumber, getRole()*overridden to return 'Manager'*

//dependencies
const Employee = require('./employeeClass');

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email)
    this.officeNum = officeNum;
  };
  
  getOfficeNum() {

  };

  getRole() {

  }
}

module.exports = Manager;