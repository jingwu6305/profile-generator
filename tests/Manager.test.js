const Manager = require("../lib/Manager.js");

test("testing Manager parameter", function(){
    let testEmployee = new Manager("James", "001", "james@lol.com", "777")
    expect(testEmployee.name).toBe("James")
    expect(testEmployee.id).toBe("001")
    expect(testEmployee.email).toBe("james@lol.com")
    expect(testEmployee.office).toBe("777")
    expect(testEmployee.getName()).toBe("James")
    expect(testEmployee.getId()).toBe("001")
    expect(testEmployee.getEmail()).toBe("james@lol.com")
    expect(testEmployee.getOffice()).toBe("777")
    expect(testEmployee.getRole()).toBe("Manager")
})