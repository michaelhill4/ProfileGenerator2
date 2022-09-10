const Manager = require("../lib/Manager");


describe('Get managers office number', () => {
    it("should show data from entries", () => {
        
      const text = 12;
      const obj = new Manager("Raphael", 1, "Raphael@tmnt.com", 12);
      expect(obj.getNum()).toEqual(text);
    })
       
});

describe('Get Role', () => {
    it("should show the employee's role", () => {
        
      const obj = new Manager("Raphael", 1, "Raphael@tmnt.com", 12);
      expect(obj.getRole()).toEqual("Manager");
    })
       
});