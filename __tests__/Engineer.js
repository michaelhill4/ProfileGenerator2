const Engineer = require('../lib/Engineer');

describe('Get github', () => {
    it("should show the github username", () => {
    
      const github = "github-user"
      const obj = new Engineer("Donatello", 1, "Donatello@tmnt.com", github);
      console.log(obj)
      expect(obj.getRole()).toEqual("Engineer");
    })
       
});

describe('Get role', () => {
    it("should show engineer as the role", () => {
    
     const github = "github-user"
      const obj = new Engineer("Donatello", 1, "Donatello@tmnt.com", github);
      expect(obj.getRole()).toEqual("Engineer");
    })
});