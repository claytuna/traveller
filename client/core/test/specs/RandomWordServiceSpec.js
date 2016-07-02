var RandomWordService = require("services/RandomWordService");

describe('services-RandomWordService', ()=>{

  describe('getPhoneme()', ()=>{
    it('should return one specific phoneme filtered by subtype and id', ()=>{      
      expect(RandomWordService.getPhoneme('CONSONANT', 1).name).toBe('/b/');
    });
  });

  describe('getPhonemeSubtypes()', ()=>{
    it('should return all phonemes filtered by subtype', ()=>{
      expect(RandomWordService.getPhonemeSubtypes('CONSONANT').length).toBe(18);
    });
  });

  describe('getPhonemes()', ()=>{
    it('should return a list of all phonemes', ()=>{
      expect(RandomWordService.getPhonemes().length).toEqual(44);
    });
  });


});
