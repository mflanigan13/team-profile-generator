// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe('object');
    
});

// getName()
test("Gets name through getName method.", () => {
    const testName = "Mallorie";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
});

// getID()
test("Can test ID through getID method.", () => {
    const testID = 123;
    const employeeInstance = new Employee("Mallorie", testID);
    expect(employeeInstance.getId()).toBe(testID);
});

// getEmail()
test("Can test email through getEmail method.", () => {
    const testEmail = "mflanigantwualumn@gmail.com";
    const employeeInstance = new Employee("James", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});

// getRole() returns 'Employee'
test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Mallorie", 123, "mflanigantwualumn@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})