import { GOVERNMENTS } from "../../constants";

export const getGovernment = (
  roll: number,
  sizeVal: number,
  popVal: number
) => {
  let rollValue = roll + sizeVal;

  if (popVal === 0) {
    rollValue = 0;
  }

  if (rollValue >= 13) return GOVERNMENTS[13];

  return GOVERNMENTS[rollValue < 0 ? 0 : rollValue];
};
