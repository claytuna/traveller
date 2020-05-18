export const StatsService = {
  getModifier: (stat: number) => {
    if (stat === 0) return -3;
    if (stat <= 2) return -2;
    if (stat <= 5) return -1;
    if (stat <= 8) return 0;
    if (stat <= 11) return 1;
    if (stat <= 14) return 2;
    if (stat <= 15) return 3;
  },
};
