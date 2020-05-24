import { POPULATIONS } from "../../constants";
import { MathService as MS } from "../MathService";

export const getPopulation = (roll: number) => {
  const currentPop = POPULATIONS[roll];
  return {
    ...currentPop,
    values: {
      ...currentPop.values,
      total: MS.random(currentPop.values.maxPop, currentPop.values.minPop),
    },
  };
};
