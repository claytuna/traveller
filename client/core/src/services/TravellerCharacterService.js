var DiceRollService = require("services/DiceRollService");
var MS = require("services/MathService");

global.DiceRollService = DiceRollService;

var TravellerCharacterService = module.exports = {
	fetchData: () => {
		RS.set('character.data', sampleData());
	},

	generate: () => {
	},


};

function sampleData(){
	return (
		{
			name: "Character name",
		}
	);
}
