import MersenneTwister from "mersenne-twister";
const m = new MersenneTwister();

export const MathService = {
  random: (max: number, min: number) => {
    return Math.floor(m.random() * (max - min)) + min;
  },

  sum: (valuesArr: number[]) => {
    return valuesArr.reduce((sum, n) => sum + n, 0);
  },
};
