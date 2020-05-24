import { CULTURES } from "../../constants";

export const getCulture = (rollA: number, rollB: number) => {
  const roll = parseInt(String(rollA) + String(rollB));

  return CULTURES.filter((o) => o.values?.roll === roll)[0];
};
