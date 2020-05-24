import MersenneTwister from "mersenne-twister";
const m = new MersenneTwister();
/* DiceRollService
 *
 * Utility for simulating dice rolls. Mersenne twister used to compensate for Math.random via psuedorandom value.
 * Param diceTypes should be an array of integers, each corresponding to the desired max die value.
 * Example: to simulate 2d6, 3d10, and 1d20, you would call rollDice( [ 6, 6, 10, 10, 10, 20 ] ).
 * NB: rollDice returns an array of results for each roll. The roll() method returns a sum of the all the results.
 * https://gist.github.com/banksean/300494 - mersenne twister details
 */
export const DiceRollService = {
  rollDice: (diceTypes: number[]) => {
    return diceTypes.map((sides) => Math.floor(m.random() * sides) + 1);
  },

  rollDiceKeepNth: (keepersArr: number[], diceTypes: number[]) => {
    return DiceRollService.keepNth(
      keepersArr,
      DiceRollService.rollDice(diceTypes)
    );
  },

  rollDiceKeepHighest: (endPosition: number, diceTypes: number[]) => {
    return DiceRollService.keepHighest(
      endPosition,
      DiceRollService.rollDice(diceTypes)
    );
  },

  rollDiceKeepLowest: (startPosition: number, diceTypes: number[]) => {
    return DiceRollService.keepLowest(
      startPosition,
      DiceRollService.rollDice(diceTypes)
    );
  },

  keepNth: (keepersArr: number[], values: number[]) => {
    return values.map((d, idx) => (keepersArr.indexOf(idx) !== -1 ? d : 0));
  },

  keepHighest: (endPosition: number, values: number[]) => {
    return values.sort((a, b) => b - a).slice(0, endPosition);
  },

  keepLowest: (startPosition: number, values: number[]) => {
    return values
      .sort((a, b) => b - a)
      .slice(values.length - startPosition, values.length);
  },

  sum: (diceRollValues: number[]) => {
    return diceRollValues.reduce((sum, n) => sum + n, 0);
  },

  roll: (diceTypes: number[]) => {
    return DiceRollService.sum(DiceRollService.rollDice(diceTypes));
  },
};
