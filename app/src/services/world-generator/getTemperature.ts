import { TemperatureObject, TEMPERATURES } from "../../constants";

export const getTemperature = (
  roll: number,
  atmosVal: number,
  habitableZone = 1
): TemperatureObject => {
  let currentRoll = roll;
  /* Atmosphere modifiers */
  if (atmosVal === 0 || atmosVal === 1) return TEMPERATURES[0];
  if (atmosVal === 2 || atmosVal === 3) currentRoll = roll - 2;
  if (atmosVal === 4 || atmosVal === 5 || atmosVal === 14) {
    currentRoll = roll - 1;
  }
  if (atmosVal === 6 || atmosVal === 7) currentRoll = roll;
  if (atmosVal === 8 || atmosVal === 9) currentRoll = roll + 1;
  if (atmosVal === 10 || atmosVal === 13 || atmosVal === 15) {
    currentRoll = roll + 2;
  }
  if (atmosVal === 11 || atmosVal === 12) currentRoll = roll + 6;

  /* habitableZone is the proximity to the system's star; 0 is hot edge, 1 is normal, 2 is cold edge */
  if (habitableZone === 0) currentRoll = roll + 4;
  if (habitableZone === 2) currentRoll = roll - 4;

  if (roll <= 2) return TEMPERATURES[1];
  if (roll >= 3 && roll <= 4) return TEMPERATURES[2];
  if (roll >= 5 && roll <= 9) return TEMPERATURES[3];
  if (roll >= 10 && roll <= 11) return TEMPERATURES[4];
  if (roll >= 12) return TEMPERATURES[5];

  /* fallback: not sure if this is possible */
  return TEMPERATURES[currentRoll] || TEMPERATURES[0];
};
