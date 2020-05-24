import { STARPORTS, StartPortObject, getAllBases } from "../../constants";

const getStarPortBases = (s: StartPortObject) => {
  return {
    ...s,
    values: { ...s.values, bases: getAllBases(s.values.baseProbability) },
  };
};

export const getStarPort = (roll: number) => {
  if (roll <= 2) return getStarPortBases(STARPORTS[5]);
  if (roll === 3 || roll === 4) return getStarPortBases(STARPORTS[4]);
  if (roll === 5 || roll === 6) return getStarPortBases(STARPORTS[3]);
  if (roll === 7 || roll === 8) return getStarPortBases(STARPORTS[2]);
  if (roll === 9 || roll === 10) return getStarPortBases(STARPORTS[1]);
  if (roll >= 11) return getStarPortBases(STARPORTS[0]);

  return getStarPortBases(STARPORTS[5]);
};
