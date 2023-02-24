const Engineer = require("../lib/Engineer.js");

test("testing Engineer parameter", function(){
    let testEmployee = new Engineer("James", "001", "james@lol.com", "github")
    expect(testEmployee.name).toBe("James")
    expect(testEmployee.id).toBe("001")
    expect(testEmployee.email).toBe("james@lol.com")
    expect(testEmployee.github).toBe("github")
    expect(testEmployee.getName()).toBe("James")
    expect(testEmployee.getId()).toBe("001")
    expect(testEmployee.getEmail()).toBe("james@lol.com")
    expect(testEmployee.getGithub()).toBe("github")
    expect(testEmployee.getRole()).toBe("Engineer")
})