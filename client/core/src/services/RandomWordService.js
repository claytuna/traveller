var MS = require('services/MathService');

var RandomWordService = module.exports = {

  getRandomWord: () => {
    var wLength = RandomWordService.getWordLength(MS.random(14751, 0)).value;
    var word = '';
    var phDelta = 1;

    while (word.length < wLength) {

      if( word.length != 0 && (wLength - word.length) <= 2 ) {
        word = word + gr( RandomWordService.getEndingPhoneme( MS.random(12702, 0) ), false );
      }

      if (word.length != 0 && (wLength - word.length) > 2 ) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var inner = phDelta === 1 ? RandomWordService.getRandom(vowels) : RandomWordService.getInnerPhoneme( MS.random(12702, 0) );
        word = word + gr( inner );
        phDelta = (phDelta == 0 ? 1 : 0);
      }

      if (word.length === 0) {
        word = word + gr( RandomWordService.getStartingPhoneme(MS.random(14751, 0)) );
      }

    }

  	return word;

    function gr( letter, start = true ){
        return RandomWordService.getRandom( RandomWordService.getGraphemeByLetter( letter, start ) );
    }
  },

  getWordLength: ( wValue ) => {
    return RandomWordService.freqFilter(RandomWordService.getWordLengths(), 14751, wValue );
  },

  getStartingPhoneme: ( wValue ) => {
    var startLetters = [
      {value:'t', weight:16671},
      {value:'a', weight:11602},
      {value:'s', weight:7755},
      {value:'h', weight:7232},
      {value:'w', weight:6753},
      {value:'i', weight:6286},
      {value:'o', weight:6264},
      {value:'b', weight:4702},
      {value:'m', weight:4383},
      {value:'f', weight:3779},
      {value:'c', weight:3511},
      {value:'l', weight:2705},
      {value:'d', weight:2670},
      {value:'p', weight:2545},
      {value:'n', weight:2365},
      {value:'e', weight:2007},
      {value:'g', weight:1950},
      {value:'r', weight:1653},
      {value:'y', weight:1620},
      {value:'u', weight:1487},
      {value:'v', weight:649},
      {value:'j', weight:597},
      {value:'k', weight:590},
      {value:'q', weight:173},
      {value:'z', weight:34},
      {value:'x', weight:17}
    ];

    return RandomWordService.freqFilter(startLetters, 16671, wValue ).value;
  },

  getInnerPhoneme: ( wValue ) => {
    var innerLetters = [
      {value:'e', weight:12702},
      {value:'t', weight:9056},
      {value:'a', weight:8167},
      {value:'o', weight:7507},
      {value:'i', weight:6966},
      {value:'n', weight:6749},
      {value:'s', weight:6327},
      {value:'h', weight:6094},
      {value:'r', weight:5987},
      {value:'d', weight:4253},
      {value:'l', weight:4025},
      {value:'c', weight:2782},
      {value:'u', weight:2758},
      {value:'m', weight:2406},
      {value:'w', weight:2361},
      {value:'f', weight:2228},
      {value:'g', weight:2015},
      {value:'y', weight:1974},
      {value:'p', weight:1929},
      {value:'b', weight:1492},
      {value:'v', weight:978},
      {value:'k', weight:772},
      {value:'j', weight:153},
      {value:'x', weight:150},
      {value:'q', weight:95},
      {value:'z', weight:74}
    ];
    return RandomWordService.freqFilter(innerLetters, 12702, wValue ).value;
  },

  getEndingPhoneme: ( wValue ) => {
    /*accuracy uncertain (top 10 valid)*/
    var endLetters = [
      {value:'e', weight:19170},
      {value:'s', weight:14350},
      {value:'d', weight:9230},
      {value:'t', weight:8640},
      {value:'n', weight:7860},
      {value:'y', weight:7300},
      {value:'r', weight:6930},
      {value:'f', weight:4080},
      {value:'l', weight:4560},
      {value:'o', weight:4670},
      {value:'g', weight:2000},
      {value:'h', weight:2782},
      {value:'a', weight:2758},
      {value:'k', weight:2406},
      {value:'m', weight:2361},
      {value:'p', weight:2228},
      {value:'u', weight:2015},
      {value:'w', weight:1974},
      {value:'b', weight:1929},
      {value:'c', weight:1492},
      {value:'i', weight:978},
      {value:'j', weight:772},
      {value:'q', weight:153},
      {value:'v', weight:150},
      {value:'x', weight:95},
      {value:'z', weight:74}
    ];
    return RandomWordService.freqFilter(endLetters, 19170, wValue ).value;
  },

  isConsonantOrVowel: ( letter ) => {
    var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    return vowels.indexOf(letter) != -1 ? 'VOWEL' : 'CONSONANT';
  },

  freqFilter: ( values, maxWeightVal, weightVal ) => {
    if(weightVal < 0 || weightVal > maxWeightVal || isNaN(weightVal)) return {value:0};
    return _.sortBy( _.filter(values, (o)=>{ return o.weight >= weightVal }), 'weight' )[0];
  },

  getGraphemeByLetter: (letter, startsWith = true) => {
    return _.filter( _.flatMap( getGroups(letter), (o) => { return o.values.graphemes } ), (str) => { return startOrEnd(str) } );

    function startOrEnd(str){
      return startsWith ? _.startsWith(str, letter) : _.endsWith(str, letter);
    }

    function getGroups(l){
      if(RandomWordService.isConsonantOrVowel(l) === 'VOWEL') {
        return _.concat(RandomWordService.getPhonemesBySubtype('VOWEL'), RandomWordService.getPhonemesBySubtype('VOWELR'));
      } else {
        return _.concat(RandomWordService.getPhonemesBySubtype('CONSONANT'), RandomWordService.getPhonemesBySubtype('DIGRAPH'));
      }
    }
  },

  getRandomVowel: () => {
    return RandomWordService.getRandom( _.concat(RandomWordService.getPhonemesBySubtype('VOWEL'), RandomWordService.getPhonemesBySubtype('VOWELR')) );
  },

  getRandomConsonant: () => {
    return RandomWordService.getRandom( _.concat(RandomWordService.getPhonemesBySubtype('CONSONANT'), RandomWordService.getPhonemesBySubtype('DIGRAPH')) );
  },

  getRandomDigraph: () => {
    return RandomWordService.getRandom( RandomWordService.getPhonemesBySubtype('DIGRAPH') );
  },

  getRandom: (arr) => {
    return arr[MS.random(arr.length, 0)];
  },

  getPhoneme: ( subtype, id ) => {
    return _.filter( RandomWordService.getPhonemesBySubtype(subtype), (o)=> { if(o.id == id) return o } )[0];
  },

  getPhonemesBySubtype: ( subtype ) => {
    return _.filter( RandomWordService.getPhonemes(), (o) => o.values.subtype === subtype );
  },

  getWordLengths: () => {
    return [
      {value:1, weight:27},
      {value:2, weight:679},
      {value:3, weight:4730},
      {value:4, weight:7151},
      {value:5, weight:10804},
      {value:6, weight:13674},
      {value:7, weight:14751},
      {value:8, weight:13616},
      {value:9, weight:11356},
      {value:10, weight:8679},
      {value:11, weight:5913},
      {value:12, weight:3792},
      {value:13, weight:2329},
      {value:14, weight:1232},
      {value:15, weight:685},
      {value:16, weight:290},
      {value:17, weight:162},
      {value:18, weight:66},
      {value:19, weight:41},
      {value:20, weight:16},
      {value:21, weight:1},
      {value:22, weight:5},
      {value:23, weight:2}
    ];
  },

  getPhonemes: () => {
    return [
      { name:'/b/', desc: 'b, bb', id:1, type:'PHONEME', values:{ examples:["bug", "bubble"], graphemes:["b", "bb"], subtype:'CONSONANT'} },
      { name:'/d/', desc: 'd, dd, ed', id:2, type:'PHONEME', values:{ examples:["dad", "add", "milled"], graphemes:["d", "dd", "ed"], subtype:'CONSONANT'} },
      { name:'/f/', desc: 'f, ff, ph, gh, lf, ft', id:3, type:'PHONEME', values:{ examples:["fat", "cliff", "phone", "enough", "half", "often"], graphemes:["f", "ff", "ph", "gh", "lf", "ft"], subtype:'CONSONANT'} },
      { name:'/g/', desc: 'g, gg, gh, gu, gue', id:4, type:'PHONEME', values:{ examples:["gun", "egg", "ghost", "guest", "prologue"], graphemes:["g", "gg", "gh", "gu", "gue"], subtype:'CONSONANT'} },
      { name:'/h/', desc: 'h, wh', id:5, type:'PHONEME', values:{ examples:["hop", "who"], graphemes:["h", "wh"], subtype:'CONSONANT'} },
      { name:'/j/', desc: 'j, ge, g, dge, di, gg', id:6, type:'PHONEME', values:{ examples:["jam", "wage", "giraffe", "edge", "soldier", "exaggerate"], graphemes:["j", "ge", "g", "dge", "di", "gg"], subtype:'CONSONANT'} },
      { name:'/k/', desc: 'k, c, ch, cc, lk, qu, q(u), ck, x', id:7, type:'PHONEME', values:{ examples:["kit", "cat", "chris", "accent", "folk", "bouquet", "queen", "rack", "box"], graphemes:["k", "c", "ch", "cc", "lk", "qu", "q(u)", "ck", "x"], subtype:'CONSONANT'} },
      { name:'/l/', desc: 'l, ll', id:8, type:'PHONEME', values:{ examples:["live", "well"], graphemes:["l", "ll"], subtype:'CONSONANT'} },
      { name:'/m/', desc: 'm, mm, mb, mn, lm', id:9, type:'PHONEME', values:{ examples:["man", "summer", "comb", "column", "palm"], graphemes:["m", "mm", "mb", "mn", "lm"], subtype:'CONSONANT'} },
      { name:'/n/', desc: 'n, nn,kn, gn, pn', id:10, type:'PHONEME', values:{ examples:["net", "funny", "know", "gnat", "pneumonic"], graphemes:["n", "nn", "kn", "gn", "pn"], subtype:'CONSONANT'} },
      { name:'/p/', desc: 'p, pp', id:11, type:'PHONEME', values:{ examples:["pin", "dippy"], graphemes:["p", "pp"], subtype:'CONSONANT'} },
      { name:'/r/', desc: 'r, rr, wr, rh', id:12, type:'PHONEME', values:{ examples:["run", "carrot", "wrench", "rhyme"], graphemes:["r", "rr", "wr", "rh"], subtype:'CONSONANT'} },
      { name:'/s/', desc: 's, ss, c, sc, ps, st, ce, se', id:13, type:'PHONEME', values:{ examples:["sit", "less", "circle", "scene", "psycho", "listen", "pace", "course"], graphemes:["s", "ss", "c", "sc", "ps", "st", "ce", "se"], subtype:'CONSONANT'} },
      { name:'/t/', desc: 't, tt, th, ed', id:14, type:'PHONEME', values:{ examples:["tip", "matter", "thomas", "ripped"], graphemes:["t", "tt", "th", "ed"], subtype:'CONSONANT'} },
      { name:'/v/', desc: 'v, f, ph, ve', id:15, type:'PHONEME', values:{ examples:["vine", "of", "stephen", "five"], graphemes:["v", "f", "ph", "ve"], subtype:'CONSONANT'} },
      { name:'/w/', desc: 'w, wh, u, o', id:16, type:'PHONEME', values:{ examples:["wit", "why", "quick", "choir"], graphemes:["w", "wh", "u", "o"], subtype:'CONSONANT'} },
      { name:'/y/', desc: 'y, i, j', id:17, type:'PHONEME', values:{ examples:["yes", "onion", "hallelujah"], graphemes:["y", "i", "j"], subtype:'CONSONANT'} },
      { name:'/z/', desc: 'z, zz, s, ss, x, ze, se', id:18, type:'PHONEME', values:{ examples:["zed", "buzz", "his", "scissors", "xylophone", "craze"], graphemes:["z", "zz", "s", "ss", "x", "ze", "se"], subtype:'CONSONANT'} },
      { name:'/a/', desc: 'a, ai, au', id:19, type:'PHONEME', values:{ examples:["cat", "plaid", "laugh"], graphemes:["a", "ai", "au"], subtype:'VOWEL'} },
      { name:'/ā/', desc: 'a, ai, eigh, aigh, ay, er, et, ei, au, a_e, ea, ey', id:20, type:'PHONEME', values:{ examples:["bay", "maid", "weigh", "straight", "pay", "foyer", "filet", "eight", "gauge", "mate", "break", "they"], graphemes:["a", "ai", "eigh", "aigh", "ay", "er", "et", "ei", "au", "ae", "ea", "ey"], subtype:'VOWEL'} },
      { name:'/e/', desc: 'e, ea, u, ie, ai, a, eo, ei, ae, ay', id:21, type:'PHONEME', values:{ examples:["end", "bread", "bury", "friend", "said", "many", "leopard", "heifer", "aesthetic", "say"], graphemes:["e", "ea", "u", "ie", "ai", "a", "eo", "ei", "ae", "ay"], subtype:'VOWEL'} },
      { name:'/ē/', desc: 'e, ee, ea, y, ey, oe, ie, i, ei, eo, ay', id:22, type:'PHONEME', values:{ examples:["be", "bee", "meat", "lady", "key", "phoenix", "grief", "ski", "deceive", "people", "quay"], graphemes:["e", "ee", "ea", "y", "ey", "oe", "ie", "i", "ei", "eo", "ay"], subtype:'VOWEL'} },
      { name:'/i/', desc: 'i, e, o, u, ui, y, ie', id:23, type:'PHONEME', values:{ examples:["it", "england", "women", "busy", "guild", "gym", "sieve"], graphemes:["i", "e", "o", "u", "ui", "y", "ie"], subtype:'VOWEL'} },
      { name:'/ī/', desc: 'i, y, igh, ie, uy, ye, ai, is, eigh, i_e', id:24, type:'PHONEME', values:{ examples:["spider", "sky", "night", "pie", "guy", "stye", "aisle", "island", "height", "kite"], graphemes:["i", "y", "igh", "ie", "uy", "ye", "ai", "is", "eigh", "ie"], subtype:'VOWEL'} },
      { name:'/o/', desc: 'o, a, ho, au, aw, ough', id:25, type:'PHONEME', values:{ examples:["octopus", "swan", "honest", "maul", "slaw", "fought"], graphemes:["o", "a", "ho", "au", "aw", "ough"], subtype:'VOWEL'} },
      { name:'/ō/', desc: 'o, oa, o_e, oe, ow, ough, eau, oo, ew', id:26, type:'PHONEME', values:{ examples:["open", "moat", "bone", "toe", "sow", "dough", "beau", "brooch", "sew"], graphemes:["o", "oa", "oe", "oe", "ow", "ough", "eau", "oo", "ew"], subtype:'VOWEL'} },
      { name:'/oo/', desc: 'o, oo, u,ou', id:27, type:'PHONEME', values:{ examples:["wolf", "look", "bush", "would"], graphemes:["o", "oo", "u", "ou"], subtype:'VOWEL'} },
      { name:'/u/', desc: 'u, o, oo, ou', id:28, type:'PHONEME', values:{ examples:["lug", "monkey", "blood", "double"], graphemes:["u", "o", "oo", "ou"], subtype:'VOWEL'} },
      { name:'/ū/', desc: 'o, oo, ew, ue, u_e, oe, ough, ui, oew, ou', id:29, type:'PHONEME', values:{ examples:["who", "loon", "dew", "blue", "flute", "shoe", "through", "fruit", "manoeuvre", "group"], graphemes:["o", "oo", "ew", "ue", "ue", "oe", "ough", "ui", "oew", "ou"], subtype:'VOWEL'} },
      { name:'/y//ü/', desc: 'u, you, ew, iew, yu, ul, eue, eau, ieu, eu', id:30, type:'PHONEME', values:{ examples:["unit", "you", "knew", "view", "yule", "mule", "queue", "beauty", "adieu", "feud"], graphemes:["u", "you", "ew", "iew", "yu", "ul", "eue", "eau", "ieu", "eu"], subtype:'VOWEL'} },
      { name:'/oi/', desc: 'oi, oy, uoy', id:31, type:'PHONEME', values:{ examples:["join", "boy", "buoy"], graphemes:["oi", "oy", "uoy"], subtype:'VOWEL'} },
      { name:'/ow/', desc: 'ow, ou, ough', id:32, type:'PHONEME', values:{ examples:["now", "shout", "bough"], graphemes:["ow", "ou", "ough"], subtype:'VOWEL'} },
      { name:'/ə/ (schwa)', desc: 'a, er, i, ar, our, or, e, ur, re, eur', id:33, type:'PHONEME', values:{ examples:["about", "ladder", "pencil", "dollar", "honour", "doctor", "ticket", "augur", "centre", "chauffeur"], graphemes:["a", "er", "i", "ar", "our", "or", "e", "ur", "re", "eur"], subtype:'VOWEL'} },
      { name:'/ã/', desc: 'air, are, ear, ere, eir, ayer', id:34, type:'PHONEME', values:{ examples:["chair", "dare", "pear", "where", "their", "prayer"], graphemes:["air", "are", "ear", "ere", "eir", "ayer"], subtype:'VOWELR'} },
      { name:'/ä/', desc: 'a, ar, au, er, ear', id:35, type:'PHONEME', values:{ examples:["math", "jar", "laugh", "sergeant", "heart"], graphemes:["a", "ar", "au", "er", "ear"], subtype:'VOWELR'} },
      { name:'/û/', desc: 'ir, er, ur, ear, or, our, yr', id:36, type:'PHONEME', values:{ examples:["bird", "term", "burn", "pearl", "word", "journey", "myrtle"], graphemes:["ir", "er", "ur", "ear", "or", "our", "yr"], subtype:'VOWELR'} },
      { name:'/ô/', desc: 'aw, a, or, oor, ore, oar, our, augh, ar, ough, au', id:37, type:'PHONEME', values:{ examples:["paw", "ball", "fork", "poor", "fore", "board", "four", "taught", "war", "bought", "sauce"], graphemes:["aw", "a", "or", "oor", "ore", "oar", "our", "augh", "ar", "ough", "au"], subtype:'VOWELR'} },
      { name:'/ēə/', desc: 'ear, eer, ere, ier', id:38, type:'PHONEME', values:{ examples:["ear", "steer", "here", "tier"], graphemes:["ear", "eer", "ere", "ier"], subtype:'VOWELR'} },
      { name:'/üə/', desc: 'ure, our', id:39, type:'PHONEME', values:{ examples:["cure", "tourist"], graphemes:["ure", "our"], subtype:'VOWELR'} },
      { name:'/zh/', desc: 's, si, z', id:40, type:'PHONEME', values:{ examples:["treasure", "division", "azure"], graphemes:["s", "si", "z"], subtype:'DIGRAPH'} },
      { name:'/ch/', desc: 'ch, tch, tu, ti, te', id:41, type:'PHONEME', values:{ examples:["chip", "watch", "future", "action", "righteous"], graphemes:["ch", "tch", "tu", "ti", "te"], subtype:'DIGRAPH'} },
      { name:'/sh/', desc: 'sh, ce, s, ci, si, ch, sci, ti', id:42, type:'PHONEME', values:{ examples:["sham", "ocean", "sure", "special", "pension", "machine", "conscience", "station"], graphemes:["sh", "ce", "s", "ci", "si", "ch", "sci", "ti"], subtype:'DIGRAPH'} },
      { name:'/th/', desc: 'th(voiced), th(unvoiced)', id:43, type:'PHONEME', values:{ examples:["thongs", "leather"], graphemes:["th", "th"], subtype:'DIGRAPH'} },
      { name:'/ng/', desc: 'ng, n, ngue', id:44, type:'PHONEME', values:{ examples:["ring", "pink", "tongue"], graphemes:["ng", "n", "ngue"], subtype:'DIGRAPH'} }
    ];
  }

}
