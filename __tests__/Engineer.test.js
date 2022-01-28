// properties: name, ID, Email
const Engineer = require('../lib/Engineer');

// github // github user name
// test("Gets github name through github method", () => {
//     const testValue = "mflanigan13"
//     const e = new Engineer('Mallorie', 123, 'mflanigantwualumn@gmail.com', testValue);
//     expect(e.getGithub()).toBe(testValue);
// })

test("Testing getGithub will return github.", () => {
    const testGithub = "mflanigan13";
    const employeeInstance = new Engineer("Mallorie", 123, "example@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

// getRole() // overridden to return 'Engineer'
test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Mallorie", 123, "example@gmail.com", "githubex");
    expect(employeeInstance.getRole()).toBe(returnValue);
});

