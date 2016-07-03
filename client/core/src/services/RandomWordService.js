var MS = require('services/MathService');

var RandomWordService = module.exports = {

  getRandomWord: () => {
    var wLength = RandomWordService.getWordLength(MS.random(14751, 0)).value; console.log(wLength)
    var word = '';
    var phBit = 0;

    while (word.length < wLength) {

      if (word.length === 0) {
        word = word + RandomWordService.getRandomConsonant().values.graphemes[0];
      }

      if (word.length != 0 && (wLength - word.length) > 2 ) {
        word = word + RandomWordService.getRandomVowel().values.graphemes[0];
      } else {
        word = word + RandomWordService.getRandomConsonant().values.graphemes[0];
      }

    }
    /*for(var i = 0; i<=wLength; i++ ) {
      i === 0 && current.push('start');
      i != 0 && i !=wLength ? current.push('mid') : current.push('last');
      phBit ^= phBit
    }*/

  	return word;
  },

  getWordLength: ( wValue ) => {
    if(wValue < 0 || wValue > 14751 || isNaN(wValue)) return 0;
    return _.sortBy( _.filter(RandomWordService.getWordLengths(), (o)=>{ return o.weight >= wValue }), 'weight' )[0];
  },

  getStartingPhoneme: ( wValue ) => {
    var startLetters = [
      {'t':16671},
      {'a':11602},
      {'s':7755},
      {'h':7232},
      {'w':6753},
      {'i':6286},
      {'o':6264},
      {'b':4702},
      {'m':4383},
      {'f':3779},
      {'c':3511},
      {'l':2705},
      {'d':2670},
      {'p':2545},
      {'n':2365},
      {'e':2007},
      {'g':1950},
      {'r':1653},
      {'y':1620},
      {'u':1487},
      {'v':649},
      {'j':597},
      {'k':590},
      {'q':173},
      {'z':34},
      {'x':17}
    ];

    return _.filter(startLetters, wValue);
  },

  getInnerPhoneme: ( wValue ) => {
    var innerLetters = [
      {'e':12702},
      {'t':9056},
      {'a':8167},
      {'o':7507},
      {'i':6966},
      {'n':6749},
      {'s':6327},
      {'h':6094},
      {'r':5987},
      {'d':4253},
      {'l':4025},
      {'c':2782},
      {'u':2758},
      {'m':2406},
      {'w':2361},
      {'f':2228},
      {'g':2015},
      {'y':1974},
      {'p':1929},
      {'b':1492},
      {'v':978},
      {'k':772},
      {'j':153},
      {'x':150},
      {'q':95},
      {'z':74}
    ];
  },

  getEndingPhoneme: ( wValue ) => {
    var endLetters = [
      {'e':19170},
      {'s':14350},
      {'d':9230},
      {'t':8640},
      {'n':7860},
      {'y':7300},
      {'r':6930},
      {'f':4080},
      {'l':4560},
      {'o':4670},
      {'g':2000},
      {'h':2782},
      {'a':2758},
      {'k':2406},
      {'m':2361},
      {'p':2228},
      {'u':2015},
      {'w':1974},
      {'b':1929},
      {'c':1492},
      {'i':978},
      {'j':772},
      {'q':153},
      {'v':150},
      {'x':95},
      {'z':74}
    ];
  },

  getRandomVowel: () => {
    return RandomWordService.getRandom( RandomWordService.getPhonemesBySubtype('VOWEL') );
  },

  getRandomConsonant: () => {
    return RandomWordService.getRandom( RandomWordService.getPhonemesBySubtype('CONSONANT') );
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
      { name:'/ã/', desc: 'air, are, ear, ere, eir, ayer', id:34, type:'PHONEME', values:{ examples:["chair", "dare", "pear", "where", "their", "prayer"], graphemes:["air", "are", "ear", "ere", "eir", "ayer"], subtype:'VOWEL'} },
      { name:'/ä/', desc: 'a, ar, au, er, ear', id:35, type:'PHONEME', values:{ examples:["math", "jar", "laugh", "sergeant", "heart"], graphemes:["a", "ar", "au", "er", "ear"], subtype:'VOWEL'} },
      { name:'/û/', desc: 'ir, er, ur, ear, or, our, yr', id:36, type:'PHONEME', values:{ examples:["bird", "term", "burn", "pearl", "word", "journey", "myrtle"], graphemes:["ir", "er", "ur", "ear", "or", "our", "yr"], subtype:'VOWEL'} },
      { name:'/ô/', desc: 'aw, a, or, oor, ore, oar, our, augh, ar, ough, au', id:37, type:'PHONEME', values:{ examples:["paw", "ball", "fork", "poor", "fore", "board", "four", "taught", "war", "bought", "sauce"], graphemes:["aw", "a", "or", "oor", "ore", "oar", "our", "augh", "ar", "ough", "au"], subtype:'VOWEL'} },
      { name:'/ēə/', desc: 'ear, eer, ere, ier', id:38, type:'PHONEME', values:{ examples:["ear", "steer", "here", "tier"], graphemes:["ear", "eer", "ere", "ier"], subtype:'VOWEL'} },
      { name:'/üə/', desc: 'ure, our', id:39, type:'PHONEME', values:{ examples:["cure", "tourist"], graphemes:["ure", "our"], subtype:'VOWEL'} },
      { name:'/zh/', desc: 's, si, z', id:40, type:'PHONEME', values:{ examples:["treasure", "division", "azure"], graphemes:["s", "si", "z"], subtype:'DIGRAPH'} },
      { name:'/ch/', desc: 'ch, tch, tu, ti, te', id:41, type:'PHONEME', values:{ examples:["chip", "watch", "future", "action", "righteous"], graphemes:["ch", "tch", "tu", "ti", "te"], subtype:'DIGRAPH'} },
      { name:'/sh/', desc: 'sh, ce, s, ci, si, ch, sci, ti', id:42, type:'PHONEME', values:{ examples:["sham", "ocean", "sure", "special", "pension", "machine", "conscience", "station"], graphemes:["sh", "ce", "s", "ci", "si", "ch", "sci", "ti"], subtype:'DIGRAPH'} },
      { name:'/th/', desc: 'th(voiced), th(unvoiced)', id:43, type:'PHONEME', values:{ examples:["thongs", "leather"], graphemes:["th", "th"], subtype:'DIGRAPH'} },
      { name:'/ng/', desc: 'ng, n, ngue', id:44, type:'PHONEME', values:{ examples:["ring", "pink", "tongue"], graphemes:["ng", "n", "ngue"], subtype:'DIGRAPH'} }
    ];
  }

}
