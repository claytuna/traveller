var RandomWordService = require("services/RandomWordService");

describe('services-RandomWordService', ()=>{

  describe('getRandomWord()', ()=>{
    it('should return a word (random length)', ()=>{
      console.log(RandomWordService.getRandomWord());
    });
  });

  describe('getWordLength()', ()=>{
    it('should return a word length by a weighted value (max: 14751)', ()=>{
      getWordLen(0, 21, 1);
      getWordLen(10803, 5, 10804);
      getWordLen(10804, 5, 10804);
      getWordLen(10805, 9, 11356);
      getWordLen(14751, 7, 14751);

      expect(RandomWordService.getWordLength(-1)).toEqual(0);
      expect(RandomWordService.getWordLength(999999)).toEqual(0);
      expect(RandomWordService.getWordLength('a')).toEqual(0);

      function getWordLen(wv, v, w){
        expect(RandomWordService.getWordLength(wv).value).toEqual(v);
        expect(RandomWordService.getWordLength(wv).weight).toEqual(w);
      }
    });
  });

  describe('getRandomVowel()', ()=>{
    it('should return one random VOWEL phoneme', ()=>{ RandomWordService.getWordLength(10804);
      expect(RandomWordService.getRandomVowel().values.subtype).toBe('VOWEL');
    });
  });

  describe('getRandomConsonant()', ()=>{
    it('should return one random CONSONANT phoneme', ()=>{
      expect(RandomWordService.getRandomConsonant().values.subtype).toBe('CONSONANT');
    });
  });

  describe('getRandomDigraph()', ()=>{
    it('should return one random DIGRAPH phoneme', ()=>{
      expect(RandomWordService.getRandomDigraph().values.subtype).toBe('DIGRAPH');
    });
  });

  describe('getRandom()', ()=>{
    it('should return one random value from the passed array', ()=>{
      expect(RandomWordService.getRandom([0,1,2,3,4])).not.toBe(undefined);
    });
  });

  describe('getPhoneme()', ()=>{
    it('should return one specific phoneme filtered by subtype and id', ()=>{
      expect(RandomWordService.getPhoneme('CONSONANT', 1).name).toBe('/b/');
    });
  });

  describe('getPhonemesBySubtype()', ()=>{
    it('should return all phonemes filtered by subtype', ()=>{
      expect(RandomWordService.getPhonemesBySubtype('CONSONANT').length).toBe(18);
    });
  });

  describe('getWordLengths()', ()=>{
    it('should return a list of all wieghted word lengths', ()=>{
      expect(RandomWordService.getWordLengths().length).toEqual(23);
    });
  });

  describe('getPhonemes()', ()=>{
    it('should return a list of all phonemes', ()=>{
      expect(RandomWordService.getPhonemes().length).toEqual(44);
    });
  });


});
