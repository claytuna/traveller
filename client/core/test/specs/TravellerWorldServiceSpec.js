var TWS = require("services/TravellerWorldService");
var DiceRollService = require("services/DiceRollService");

describe('services-TravellerWorldService', ()=>{

  describe('generate()', ()=>{
    it('should create an entire random planet object', ()=>{
      spyOn(DiceRollService, 'rollDice').and.callThrough();
      TWS.generate();
      expect(DiceRollService.rollDice.calls.count()).toBeGreaterThan(5);
      expect(RS.get('world.data')).not.toBe(undefined);
    });
  });

  describe('getSize()', ()=>{
    it('should return appriopriate world size based on a roll value', ()=>{
      size(1, "0");
      size(2, "1");
      size(3, "2");
      size(4, "3");
      size(5, "4");
      size(6, "5");
      size(7, "6");
      size(8, "7");
      size(9, "8");
      size(10, "9");
      size(11, "A");

      function size(rollValue, specValue){
        expect(TWS.getSize(rollValue).name).toBe(specValue);
      }
    });
  });

  describe('getAtmosphere()', ()=>{
    it('should return appriopriate world atmosphere based on a given value: (2d6 - 7) + size', ()=>{
      atmos(-1, "0");
      atmos(0, "0");
      atmos(1, "1");
      atmos(2, "2");
      atmos(10, "A");
      atmos(11, "B");
      atmos(12, "C");
      atmos(13, "D");
      atmos(14, "E");
      atmos(15, "F");

      function atmos(rollValue, specValue){
        expect(TWS.getAtmosphere(rollValue).name).toBe(specValue);
      }
    });
  });


});
