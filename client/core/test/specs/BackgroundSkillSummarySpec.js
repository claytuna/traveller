var SkillService = require('services/SkillService');

var BackgroundSkillSummary = require("components/display/BackgroundSkillSummary");

describe('display-BackgroundSkillSummary', ()=>{
  var container;

  beforeEach(()=>{
    var world = {

    };
    container = RTU.render(<BackgroundSkillSummary data={world}/>);
  });

  it('should get background skill list based on world trade data codes', ()=>{

  });



});
