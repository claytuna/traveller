var MersenneTwister = require("mersenne-twister");
var m = new MersenneTwister();

var MathService = module.exports = {

  random: (max, min) => {
  	return Math.floor(m.random() * (max - min)) + min;
  },

  sum: (valuesArr) => {
    return _.reduce( valuesArr, (sum, n) => sum + n, 0 ); 
  }

}
