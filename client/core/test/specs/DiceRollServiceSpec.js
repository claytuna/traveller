var DiceRollService = require("services/DiceRollService");

describe('services-DiceRollService', ()=>{

  describe('rollDice()', ()=>{
    it('should return an array of random numbers (floor value of 1)', ()=>{
      var rd = DiceRollService.rollDice([1,1]);
      expect(rd.length).toEqual(2);
      expect(rd[0]).toBe(1);
      expect(rd[1]).toBe(1);
    });
  });

  describe('rollDiceKeepNth()', ()=>{
    it('should call rollDice and keepNth', ()=>{
      spyOn(DiceRollService, 'keepNth').and.callThrough();
      spyOn(DiceRollService, 'rollDice').and.callThrough();
      var rd = DiceRollService.rollDiceKeepNth([0,2], [6,6,6,6,6,6]);

      expect(DiceRollService.keepNth).toHaveBeenCalled();
      expect(DiceRollService.rollDice).toHaveBeenCalled();
      expect(rd.length).toEqual(6);
    });
  });

  describe('rollDiceKeepHighest()', ()=>{
    it('should call rollDice and keepHighest', ()=>{
      spyOn(DiceRollService, 'keepHighest').and.callThrough();
      spyOn(DiceRollService, 'rollDice').and.callThrough();
      var rd = DiceRollService.rollDiceKeepHighest(3, [6,6,6,6,6,6,6]);

      expect(DiceRollService.keepHighest).toHaveBeenCalled();
      expect(DiceRollService.rollDice).toHaveBeenCalled();
      expect(rd.length).toEqual(3);
    });
  });

  describe('rollDiceKeepLowest()', ()=>{
    it('should call rollDice and keepLowest', ()=>{
      spyOn(DiceRollService, 'keepLowest').and.callThrough();
      spyOn(DiceRollService, 'rollDice').and.callThrough();
      var rd = DiceRollService.rollDiceKeepLowest(3, [6,6,6,6,6,6,6]);

      expect(DiceRollService.keepLowest).toHaveBeenCalled();
      expect(DiceRollService.rollDice).toHaveBeenCalled();
      expect(rd.length).toEqual(3);
    });
  });


  describe('keepNth()', ()=>{
    it('should return an array with preselected values set to 0', ()=>{
      var rd = DiceRollService.keepNth([0,2], [1,2,3,4]);
      expect(rd.length).toEqual(4);
      expect(rd[0]).toBe(1);
      expect(rd[1]).toBe(0);
      expect(rd[2]).toBe(3);
      expect(rd[3]).toBe(0);
    });
  });

  describe('keepHighest()', ()=>{
    it('should return an array of top X number of values in an array', ()=>{
      var rd = DiceRollService.keepHighest(2, [1,4,3,2]);
      expect(rd.length).toEqual(2);
      expect(rd[0]).toBe(4);
      expect(rd[1]).toBe(3);
    });
  });

  describe('keepLowest()', ()=>{
    it('should return an array of bottom X number of values in an array', ()=>{
      var rd = DiceRollService.keepLowest(2, [1,4,3,2]);
      expect(rd.length).toEqual(2);
      expect(rd[0]).toBe(2);
      expect(rd[1]).toBe(1);
    });
  });

  describe('sum()', ()=>{
    it('should add an array of numbers', ()=>{
      expect(DiceRollService.sum([1,1])).toBe(2);
    });
  });

  describe('roll()', ()=>{
    it('should sum an array of diceTypes', ()=>{
      spyOn(DiceRollService, 'sum').and.callThrough();
      spyOn(DiceRollService, 'rollDice').and.callThrough();
      var rd = DiceRollService.roll([1,1]);
      expect(DiceRollService.sum).toHaveBeenCalled();
      expect(DiceRollService.rollDice).toHaveBeenCalled();
      expect(rd).toBe(2);
    });
  });


});
