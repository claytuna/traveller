import { COMMS } from "../../constants";

export const getCommunications = (techLevel: number) => {
  if (techLevel <= 3) return COMMS[0];
  if (techLevel >= 4 && techLevel <= 6) return COMMS[1];
  if (techLevel >= 7 && techLevel <= 8) return COMMS[2];
  if (techLevel >= 9) return COMMS[3];
};
