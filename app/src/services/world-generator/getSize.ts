import { MathService as MS } from "../MathService";
import { SIZE } from "../../constants";

export const getSize = (roll: number) => {
  if (roll - 1 < 0) {
    return SIZE[0];
  }

  const currentSize = SIZE[roll - 1];
  if (!currentSize) {
    return SIZE[0];
  }

  return {
    ...currentSize,
    values: {
      ...currentSize.values,
      diameter: MS.random(
        currentSize.values.maxDiameter,
        currentSize.values.minDiameter
      ),
    },
  };
};
