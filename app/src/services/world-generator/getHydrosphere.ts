import { MathService as MS } from "../MathService";
import {
  HYDROSPHERES,
  TemperatureNames,
  HydrosphereObject,
} from "../../constants";

function getRandomHydroPercent(h: HydrosphereObject) {
  return {
    ...h,
    values: {
      ...h.values,
      percent: MS.random(h.values.max, h.values.min) || 0,
    },
  };
}

export const getHydrosphere = (
  roll: number,
  sizeVal: number,
  atmosVal: number,
  tempVal: TemperatureNames
) => {
  let currentRoll = roll;
  if (sizeVal <= 1) return getRandomHydroPercent(HYDROSPHERES[0]);

  if (atmosVal <= 1) currentRoll = roll - 4;
  if (atmosVal >= 10 && atmosVal <= 12) currentRoll = roll - 4;

  if (tempVal === "Hot") currentRoll = roll - 2;
  if (tempVal === "Roasting") currentRoll = roll - 6;

  if (roll <= 0) {
    return getRandomHydroPercent(HYDROSPHERES[0]);
  }
  if (roll >= 11) {
    return getRandomHydroPercent(HYDROSPHERES[10]);
  }

  return getRandomHydroPercent(HYDROSPHERES[currentRoll - 1]);
};
