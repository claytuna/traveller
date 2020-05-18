export const getAtmosphericWarning = (techLevel: number, atmosVal: number) => {
  if (techLevel <= 7 && atmosVal <= 1) return true;
  if (techLevel <= 4 && atmosVal >= 2 && atmosVal <= 3) return true;
  if (techLevel <= 2 && atmosVal === 4) return true;
  if (techLevel <= 2 && atmosVal === 7) return true;
  if (techLevel <= 2 && atmosVal === 9) return true;
  if (techLevel <= 7 && atmosVal === 10) return true;
  if (techLevel <= 8 && atmosVal === 11) return true;
  if (techLevel <= 9 && atmosVal === 12) return true;
  if (techLevel <= 4 && atmosVal === 13) return true;
  if (techLevel <= 4 && atmosVal === 14) return true;
  if (techLevel <= 7 && atmosVal === 15) return true;

  return false;
};
