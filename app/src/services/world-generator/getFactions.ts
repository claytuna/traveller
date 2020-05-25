import { DiceRollService } from "../DiceRollService";
import { FACTIONS, getFactionGovt, FactionObject } from "../../constants";

export const getFactions = (
  roll: number,
  popVal: number,
  govtVal: number
): FactionObject[] => {
  const result = [];

  if (popVal <= 0) return [];

  if (govtVal === 0 || govtVal === 7) roll = roll + 1;
  if (govtVal >= 10) roll = roll - 1;

  if (roll === 0) return [];

  let sizeRoll;
  for (let i = 0; i < roll; i++) {
    sizeRoll = DiceRollService.roll([6, 6]);
    if (sizeRoll >= 1 && sizeRoll <= 3) {
      result.push({
        ...FACTIONS[0],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 4 && sizeRoll <= 5) {
      result.push({
        ...FACTIONS[1],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 6 && sizeRoll <= 7) {
      result.push({
        ...FACTIONS[2],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 8 && sizeRoll <= 9) {
      result.push({
        ...FACTIONS[3],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 10 && sizeRoll <= 11) {
      result.push({
        ...FACTIONS[4],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll > 11) {
      result.push({
        ...FACTIONS[5],
        values: { govt: getFactionGovt() },
      });
    }
  }

  return result;
};
