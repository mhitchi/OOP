//Manager class
// extends Employee
// officeNumber, getRole()*overridden to return 'Manager'*
//dependencies
const Employee = require('./employeeClass');
// class Manager extends Employee {
//   constructor(officeNum) {
//     super(name, id, "manager", officeNum)
//     this.officeNum = officeNum;
//   };
class Manager extends Employee {
  constructor(name, id, email, title, officeNum) {
    super(name, id, email, title)
    this.officeNum = officeNum;
  };
  getOfficeNum() {
  };
  getRole() {
  }
}
module.exports = Manager;