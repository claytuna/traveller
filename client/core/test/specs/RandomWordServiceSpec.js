var RandomWordService = require("services/RandomWordService");

describe('services-RandomWordService', ()=>{

  describe('getRandomWord()', ()=>{
    it('should return a word (random length)', ()=>{
      var w = RandomWordService.getRandomWord();
      expect(w.length).toBeGreaterThan(0);
      expect(typeof w).toBe('string');
    });
  });

  describe('getWordLength()', ()=>{
    it('should return a word length by a weighted value (max: 14751)', ()=>{
      getWordLen(0, 21, 1);
      getWordLen(10803, 5, 10804);
      getWordLen(10804, 5, 10804);
      getWordLen(10805, 9, 11356);
      getWordLen(14751, 7, 14751);

      expect(RandomWordService.getWordLength(-1).value).toEqual(0);
      expect(RandomWordService.getWordLength(999999).value).toEqual(0);
      expect(RandomWordService.getWordLength('a').value).toEqual(0);

      function getWordLen(wv, v, w){
        expect(RandomWordService.getWordLength(wv).value).toEqual(v);
        expect(RandomWordService.getWordLength(wv).weight).toEqual(w);
      }
    });
  });

  describe('getStartingPhoneme()', ()=>{
    it('should return one starting phoneme', ()=>{
      expect(RandomWordService.getStartingPhoneme(11602)).toBe('a');
    });
  });

  describe('getInnerPhoneme()', ()=>{
    it('should return one inner phoneme', ()=>{
      expect(RandomWordService.getInnerPhoneme(12702)).toBe('e');
    });
  });

  describe('getEndingPhoneme()', ()=>{
    it('should return one ending phoneme', ()=>{
      expect(RandomWordService.getEndingPhoneme(19165)).toBe('e');
    });
  });

  describe('isConsonantOrVowel()', ()=>{
    it('should return CONSONANT or VOWEL for given letter', ()=>{
      expect(RandomWordService.isConsonantOrVowel('e')).toBe('VOWEL');
      expect(RandomWordService.isConsonantOrVowel('z')).toBe('CONSONANT');
      expect(RandomWordService.isConsonantOrVowel('y')).toBe('CONSONANT');
    });
  });

  describe('freqFilter()', ()=>{
    it('should filter an array by weighted frequency value', ()=>{
      var arr = [
        {value:'a', weight:10},
        {value:'b', weight:7},
        {value:'c', weight:5},
        {value:'d', weight:2}
      ];
      expect(RandomWordService.freqFilter(arr, 10, 6).value).toBe('b');
      expect(RandomWordService.freqFilter(arr, 10, 8).value).toBe('a');

      expect(RandomWordService.freqFilter(arr, 10, -1).value).toBe(0);
      expect(RandomWordService.freqFilter(arr, 10, 12).value).toBe(0);
      expect(RandomWordService.freqFilter(arr, 10, 'asdf').value).toBe(0);
    });
  });

  describe('getGraphemeByLetter()', ()=>{
    it('should return one random grapheme based on letter and startsWith param', ()=>{
      expect(RandomWordService.getGraphemeByLetter('e')).toEqual(["eigh", "er", "et", "ei", "ea", "ey", "e", "ea", "eo", "ei", "e", "ee", "ea", "ey", "ei", "eo", "e", "eigh", "eau", "ew", "ew", "ew", "eue", "eau", "eu", "er", "e", "eur", "ear", "ere", "eir", "er", "ear", "er", "ear", "ear", "eer", "ere"]);
      expect(RandomWordService.getGraphemeByLetter('c')).toEqual([ 'c', 'ch', 'cc', 'ck', 'c', 'ce', 'ch', 'ce', 'ci', 'ch' ]);
    });
  });

  describe('getRandomVowel()', ()=>{
    it('should return one random VOWEL phoneme', ()=>{
      var rv = RandomWordService.getRandomVowel().values.subtype
      expect(rv === 'VOWEL' || rv === 'VOWELR').toBe(true);
    });
  });

  describe('getRandomConsonant()', ()=>{
    it('should return one random CONSONANT phoneme', ()=>{
      var rc = RandomWordService.getRandomConsonant().values.subtype;
      expect(rc === 'CONSONANT' || rc === 'DIGRAPH').toBe(true);
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
