export const TRADE_CODES = [
  {
    name: "Agricultural",
    id: 0,
    desc:
      "Agricultural worlds are dedicated to farming and food production. Often devided into semi-feudal estates",
    values: { digit: 0, code: "Ag" },
  },
  {
    name: "Asteroid",
    id: 0,
    desc:
      "Asteroids are usually mining colonies, but can also be orbital factories or colonies",
    values: { digit: 1, code: "As" },
  },
  {
    name: "Barren",
    id: 0,
    desc: "Barren worlds are uncolonized and empty",
    values: { digit: 2, code: "Ba" },
  },
  {
    name: "Desert",
    id: 0,
    desc: "Desert worlds are dry and barely habitable",
    values: { digit: 3, code: "De" },
  },
  {
    name: "Fluid Oceans",
    id: 0,
    desc:
      "Fluid Oceans are worlds where the surface liquid is something other than water",
    values: { digit: 4, code: "Fl" },
  },
  {
    name: "Garden",
    id: 0,
    desc: "Garden worlds are edenic",
    values: { digit: 5, code: "Ga" },
  },
  {
    name: "High population",
    id: 0,
    desc: "High population worlds have a population in the billions or more",
    values: { digit: 6, code: "Hi" },
  },
  {
    name: "High technology",
    id: 0,
    desc:
      "High technology worlds are among the most technogically advanced in the Imperium",
    values: { digit: 7, code: "Ht" },
  },
  {
    name: "Ice-capped",
    id: 0,
    desc:
      "Ice-capped worlds have most their surface liquid frozen in polar ice caps, and are cold and dry",
    values: { digit: 8, code: "IC" },
  },
  {
    name: "Industrial",
    id: 0,
    desc: "Industrial worlds are dominated by factories and cities",
    values: { digit: 9, code: "In" },
  },
  {
    name: "Low population",
    id: 0,
    desc:
      "Low population worlds have a population of only a few thousand or less",
    values: { digit: 10, code: "Lo" },
  },
  {
    name: "Low technology",
    id: 0,
    desc:
      "Low technology worlds are pre-industrial and cannot produce advanced goods",
    values: { digit: 11, code: "Lt" },
  },
  {
    name: "Non-Agricultural",
    id: 0,
    desc:
      "Non-Agricultural worlds are too dry or barren to support their population using conventional food production",
    values: { digit: 12, code: "Na" },
  },
  {
    name: "Non-Industrial",
    id: 0,
    desc:
      "Non-Industrial worlds are too low-population to maintain an industrial base",
    values: { digit: 13, code: "Ni" },
  },
  {
    name: "Poor",
    id: 0,
    desc:
      "Poor worlds lack resources, viable land, or sufficient population to be anything other than marginal colonies",
    values: { digit: 14, code: "Po" },
  },
  {
    name: "Rich",
    id: 0,
    desc:
      "Rich worlds are blessed with a stable government and viable biosphere, making them economic powerhouses.",
    values: { digit: 15, code: "Ri" },
  },
  {
    name: "Water World",
    id: 0,
    desc: "Water worlds are nearly entirely water/ocean",
    values: { digit: 16, code: "Wa" },
  },
  {
    name: "Vacuum",
    id: 0,
    desc: "Vacuum worlds have no atmosphere",
    values: { digit: 17, code: "Va" },
  },
];

export const getTradeCodes = (
  sizeVal: number,
  atmosVal: number,
  hydroVal: number,
  popVal: number,
  govtVal: number,
  lawLevel: number,
  techLevel: number
) => {
  var result = [];

  if (
    atmosVal >= 4 &&
    atmosVal <= 9 &&
    hydroVal >= 4 &&
    hydroVal <= 8 &&
    popVal >= 5 &&
    popVal <= 7
  )
    result.push(TRADE_CODES[0]);
  if (sizeVal === 0 && atmosVal === 0 && hydroVal === 0)
    result.push(TRADE_CODES[1]);
  if (popVal === 0 && govtVal === 0 && lawLevel === 0)
    result.push(TRADE_CODES[2]);
  if (atmosVal >= 2 && hydroVal === 0) result.push(TRADE_CODES[3]);
  if (atmosVal >= 10 && hydroVal === 1) result.push(TRADE_CODES[4]);
  if (
    sizeVal >= 5 &&
    atmosVal >= 4 &&
    atmosVal <= 9 &&
    hydroVal >= 4 &&
    hydroVal <= 9
  )
    result.push(TRADE_CODES[5]);
  if (popVal >= 9) result.push(TRADE_CODES[6]);
  if (techLevel >= 12) result.push(TRADE_CODES[7]);
  if (atmosVal <= 1 && hydroVal >= 1) result.push(TRADE_CODES[8]);
  if (
    atmosVal === 0 ||
    atmosVal === 1 ||
    atmosVal === 2 ||
    atmosVal === 4 ||
    atmosVal === 7 ||
    atmosVal === 9
  ) {
    if (popVal >= 9) result.push(TRADE_CODES[9]);
  }
  if (popVal >= 1 && popVal <= 3) result.push(TRADE_CODES[10]);
  if (techLevel <= 5) result.push(TRADE_CODES[11]);
  if (
    atmosVal >= 0 &&
    atmosVal <= 3 &&
    hydroVal >= 0 &&
    hydroVal <= 3 &&
    popVal >= 6
  )
    result.push(TRADE_CODES[12]);
  if (popVal >= 4 && popVal <= 6) result.push(TRADE_CODES[13]);
  if (atmosVal >= 2 && atmosVal <= 5 && popVal >= 0 && popVal <= 3)
    result.push(TRADE_CODES[14]);
  if (atmosVal === 6 || atmosVal === 8) {
    if (popVal >= 6 && popVal <= 8) result.push(TRADE_CODES[15]);
  }
  if (hydroVal === 10) result.push(TRADE_CODES[16]);
  if (atmosVal === 0) result.push(TRADE_CODES[17]);

  return result;
};
