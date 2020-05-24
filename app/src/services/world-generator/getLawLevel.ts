import { LAW as LAWPTIONS } from "../../constants";

export const getLawLevel = (roll: number, govtVal: number) => {
  roll = roll + govtVal;

  if (roll <= 0) return LAWPTIONS[0];
  if (roll >= 9) return LAWPTIONS[9];

  return LAWPTIONS[roll];
};
