// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName()
test('gets employee name', () => {
    const employee = New Employee

    expect(employee.getName()).toEqual(expect.any(String));
})

// getID()

// getEmail()

// getRole() returns 'Employee'
