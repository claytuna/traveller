var SkillService = require('services/SkillService');

var BackgroundSkillSummary = require("components/display/BackgroundSkillSummary");

describe('display-BackgroundSkillSummary', ()=>{
  var node;

  it('should get background skill list based on world trade data codes', ()=>{
    spyOn(SkillService, 'getBackgroundSkills').and.callThrough();
    var data = {
        tradeCodes: [
          { name: "Agricultural", id:0, desc:"Agricultural worlds are dedicated to farming and food production. Often devided into semi-feudal estates", values:{ digit:0, code:"Ag" }},
    			{ name: "Asteroid", id:0, desc:"Asteroids are usually mining colonies, but can also be orbital factories or colonies", values:{ digit:1, code:"As" }},
    			{ name: "Barren", id:0, desc:"Barren worlds are uncolonized and empty", values:{ digit:2, code:"Ba" }},
        ]
    };
    node = RTU.render(<BackgroundSkillSummary data={data}/>);
    expect(node.find('p:contains(Animals)').length).toBe(1);
    expect(node.find('p:contains(Zero-G)').length).toBe(1);

    expect(node.find('p:contains(Admin)').length).toBe(1);
    expect(node.find('p:contains(Social Science)').length).toBe(1);
  });

});
