//Employee parent class
// name, id, title, getName(), getId(), getEmail(), getRole()*returns 'employee'*
class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.role = title;
    this.email = email;
    this.id = id;
  };
}
module.exports = Employee;