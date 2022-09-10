const Intern = require("../lib/Intern");

describe('Get the interns school info', () => {
    it("should show data from entries", () => {
        
      const text = "school";

      const obj = new Intern("Leonardo", 1, "Leonardo@tmnt.com", "school");

      expect(obj.getSchool()).toEqual(text);
    })
       
});

describe('Get the role', () => {
    it("should show data from entries", () => {
        
      const text = "school";

      const obj = new Intern("Leonardo", 1, "Leonardo@tmnt.com", "school");

      expect(obj.getRole()).toEqual("Intern");
    })
       
});