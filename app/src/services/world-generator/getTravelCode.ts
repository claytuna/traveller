import { TRAVEL_CODES } from "../../constants";

export const getTravelCode = (
  atmosVal: number,
  govtVal: number,
  lawVal: number
) => {
  /* NOTE: "Red" travel codes are assigned by the discretion of the Referee (GM) */
  if (atmosVal >= 10) return TRAVEL_CODES[0];
  if (govtVal === 0 || govtVal === 7 || govtVal === 10) return TRAVEL_CODES[0];
  if (lawVal === 0 || lawVal >= 9) return TRAVEL_CODES[0];
  /* "Green" is unofficial */
  return TRAVEL_CODES[2];
};
