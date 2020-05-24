import { ATMOSPHERES } from "../../constants";

export const getAtmosphere = (roll: number) => {
  return ATMOSPHERES[roll < 0 ? 0 : roll];
};
