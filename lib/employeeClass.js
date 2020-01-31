//Employee parent class
// name, id, title, getName(), getId(), getEmail(), getRole()*returns 'employee'*
class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.role = title;
    this.email = email;
    this.id = id;
  };
  getName() {
  };
  getId() {
  };
  getEmail() {
  };
  getRole() {
  }
}
module.exports = Employee;