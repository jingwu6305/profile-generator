const Intern = require("../lib/Intern");

test("testing Intern parameter", function(){
    let testEmployee = new Intern("James", "001", "james@lol.com", "blahblah high school")
    expect(testEmployee.name).toBe("James")
    expect(testEmployee.id).toBe("001")
    expect(testEmployee.email).toBe("james@lol.com")
    expect(testEmployee.school).toBe("blahblah high school")
    expect(testEmployee.getName()).toBe("James")
    expect(testEmployee.getId()).toBe("001")
    expect(testEmployee.getEmail()).toBe("james@lol.com")
    expect(testEmployee.getSchool()).toBe("blahblah high school")
    expect(testEmployee.getRole()).toBe("Intern")
})