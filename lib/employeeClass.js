//Employee parent class
// name, id, title, getName(), getId(), getEmail(), getRole()*returns 'employee'*
class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.title = title;
    this.email = email;
    this.id = id;
  };

  getName() {
    return this.name;
  };

  getId() {
    return this.id;
  };

  getEmail() {
    return this.email;
  };

  getRole() {
    this.title;
  }
}
module.exports = Employee;