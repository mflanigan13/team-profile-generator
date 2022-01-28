// using Intern constructor 
const Intern = require('../lib/Intern');

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 