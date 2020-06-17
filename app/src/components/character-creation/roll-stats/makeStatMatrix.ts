export function makeStatMatrix(vals: number[]): StatMatrixArray {
  return ["STR", "DEX", "END", "INT", "EDU", "SOC"].map((stat) => ({
    name: stat,
    rolls: vals,
  }));
}
export type StatMatrixArray = { name: string; rolls: number[] }[];
