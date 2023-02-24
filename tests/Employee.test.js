const Employee = require("../lib/Employee.js");

test("testing Employee parameter", function(){
    let testEmployee = new Employee("James", "001", "james@lol.com")
    expect(testEmployee.name).toBe("James")
    expect(testEmployee.id).toBe("001")
    expect(testEmployee.email).toBe("james@lol.com")
    expect(testEmployee.getName()).toBe("James")
    expect(testEmployee.getId()).toBe("001")
    expect(testEmployee.getEmail()).toBe("james@lol.com")
    expect(testEmployee.getRole()).toBe("Employee")
})