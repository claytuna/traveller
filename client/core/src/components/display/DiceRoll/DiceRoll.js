var DRS = require("services/DiceRollService");
require("./DiceRoll.less");

module.exports = (props) => {
	var roll;

	if(props.rolls && props.keepHighest) {
		var keepHighest = !isNaN(props.keepHighest) ? props.keepHighest : 1;
		roll = DRS.sum(DRS.rollDiceKeepHighest(keepHighest, props.rolls));
	} else if (props.rolls) {
		roll = DRS.roll(props.rolls);
	} else {
		roll = 0;
	}

	props.rsKey && RS.set(`diceRolls.${props.rsKey}`, roll);

	return (<span className="dice-roll">{ props.rolls && roll }</span>);
}
