import { GOVERNMENTS, GovernmentObject } from "../../constants";

export const getGovernment = (
  roll: number,
  sizeVal: number,
  popVal: number,
  govObjects?: GovernmentObject[]
) => {
  /* circular dependency...
   * at initialization, GOVERNMENTS is not yet populated
   * see constants/factions
   */
  const gov = govObjects || GOVERNMENTS;
  let rollValue = roll + sizeVal;

  if (popVal === 0) {
    rollValue = 0;
  }

  if (rollValue >= 13) return gov[13];
  return gov[rollValue < 0 ? 0 : rollValue];
};
