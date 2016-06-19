var MathService = require("services/MathService");

describe('services-MathService', ()=>{

  describe('random()', ()=>{
    it('should return a random number based on a max/min value', ()=>{
      var v = MathService.random(5,1);
      expect(typeof v).toEqual('number');
      expect(v >= 1).toBe(true);
    });
  });

  describe('sum()', ()=>{
    it('should sum an array of values', ()=>{
      expect(MathService.sum([5,1])).toBe(6);
    });
  });


});
