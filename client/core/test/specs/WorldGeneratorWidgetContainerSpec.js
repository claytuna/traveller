var TravellerWorldService = require('services/TravellerWorldService');
var CharacterService = require("services/CharacterService");

var WorldGeneratorWidgetContainer = require("components/container/WorldGeneratorWidgetContainer");

describe('container-WorldGeneratorWidgetContainer', ()=>{
  var container;

  beforeEach(()=>{
    container = RTU.render(<WorldGeneratorWidgetContainer/>);
  });

  it('should have an empty state', ()=>{
    expect(container.find('.card p:contains(Generate world below)').length).toBe(1);
    expect(container.find('.btn:contains(Generate New World)').length).toBe(1);
    expect(container.find('.btn:contains(Accept World)').length).toBe(0);
  });

  it('should generate a homeworld and show options on generate click', ()=>{
    spyOn(TravellerWorldService, 'generate').and.callThrough();
    var $btnGenerate = container.find('.btn:contains(Generate New World)');

    expect( _.size(RS.get('world.data')) ).toBe(0);
    RTU.click($btnGenerate);
    expect(TravellerWorldService.generate).toHaveBeenCalled();
    expect( _.size(RS.get('world.data')) ).toBeGreaterThan(0);
    expect(container.find('.btn:contains(Accept World)').length).toBe(1);
  });

  it('should have an accept homeworld button that adds results to the character summary', ()=>{
    spyOn(CharacterService, 'setHomeworld').and.callThrough();
    var $btnGenerate = container.find('.btn:contains(Generate New World)');
    RTU.click($btnGenerate);
    expect( _.size(RS.get('world.data')) ).toBeGreaterThan(0);
    expect( _.size(RS.get('character.data.homeworld')) ).toBe(0);
    var $btnAccept = container.find('.btn:contains(Accept World)');
    expect($btnAccept.length).toBe(1);
    RTU.click($btnAccept);
    expect( _.size(RS.get('character.data.homeworld')) ).toBeGreaterThan(0);
  });

});
