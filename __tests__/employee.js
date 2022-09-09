const Employee = require("../lib/Employee");

describe('Get Name', () => {
    it("should display data from entries", () => {

      const text = 'Michelangelo';
      const obj = new Employee(text)
      expect(obj.name).toEqual(text)

    })
       
});

describe('Get ID', () => {
    it("should display data from entries", () => {

      const text = 1;
      const obj = new Employee(text, 51);
      expect(obj.id).toEqual(text);
    })
       
});

describe('Get email', () => {
    it("should display data from entries", () => {

      const text = "michelangelo@tmnt.com";
      const obj = new Employee(text, 5, "michelangelo@tmnt.com");
      expect(obj.email).toEqual(text);
    })
       
});
describe('Get ID', () => {
    it("should display data from entries", () => {

      const text = "title";
      const obj = new Employee(text, 5, "michelangelo@tmnt.com", "title");
      expect(obj.title).toEqual(text);
    })
       
});