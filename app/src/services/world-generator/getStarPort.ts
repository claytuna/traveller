import { DiceRollService } from "../DiceRollService";

export const getStarPort = (roll: number) => {
  if (roll <= 2) return STARPORTS[5];
  if (roll === 3 || roll === 4) return STARPORTS[4];
  if (roll === 5 || roll === 6) return STARPORTS[3];
  if (roll === 7 || roll === 8) return STARPORTS[2];
  if (roll === 9 || roll === 10) return STARPORTS[1];
  if (roll >= 11) return STARPORTS[0];

  return STARPORTS[5];
};
