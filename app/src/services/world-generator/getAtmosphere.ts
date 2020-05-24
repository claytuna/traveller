export const getAtmosphere = (roll: number) => {
  return atmosOptions[roll < 0 ? 0 : roll];
};
