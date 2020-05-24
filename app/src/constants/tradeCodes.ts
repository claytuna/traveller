import { DataObject } from "../";

export type TradeCodeNames =
  | "Agricultural"
  | "Asteroid"
  | "Barren"
  | "Desert"
  | "Fluid Oceans"
  | "Garden"
  | "High population"
  | "High technology"
  | "Ice-capped"
  | "Industrial"
  | "Low population"
  | "Low technology"
  | "Non-Agricultural"
  | "Non-Industrial"
  | "Poor"
  | "Rich"
  | "Water World"
  | "Vacuum";

export type TradeCodeKeys =
  | "Ag"
  | "As"
  | "Ba"
  | "De"
  | "Fl"
  | "Ga"
  | "Hi"
  | "Ht"
  | "IC"
  | "In"
  | "Lo"
  | "Lt"
  | "Na"
  | "Ni"
  | "Po"
  | "Ri"
  | "Wa"
  | "Va";

export interface TradeCodeObject
  extends DataObject<TradeCodeNames, "TRADECODE"> {
  values: {
    code: TradeCodeKeys;
    digit: number;
  };
}

export const TRADE_CODES: TradeCodeObject[] = [
  {
    name: "Agricultural",
    type: "TRADECODE",
    id: 0,
    desc:
      "Agricultural worlds are dedicated to farming and food production. Often devided into semi-feudal estates",
    values: { digit: 0, code: "Ag" },
  },
  {
    name: "Asteroid",
    type: "TRADECODE",
    id: 1,
    desc:
      "Asteroids are usually mining colonies, but can also be orbital factories or colonies",
    values: { digit: 1, code: "As" },
  },
  {
    name: "Barren",
    id: 2,
    type: "TRADECODE",
    desc: "Barren worlds are uncolonized and empty",
    values: { digit: 2, code: "Ba" },
  },
  {
    name: "Desert",
    id: 3,
    type: "TRADECODE",
    desc: "Desert worlds are dry and barely habitable",
    values: { digit: 3, code: "De" },
  },
  {
    name: "Fluid Oceans",
    id: 4,
    type: "TRADECODE",
    desc:
      "Fluid Oceans are worlds where the surface liquid is something other than water",
    values: { digit: 4, code: "Fl" },
  },
  {
    name: "Garden",
    id: 5,
    type: "TRADECODE",
    desc: "Garden worlds are edenic",
    values: { digit: 5, code: "Ga" },
  },
  {
    name: "High population",
    id: 6,
    type: "TRADECODE",
    desc: "High population worlds have a population in the billions or more",
    values: { digit: 6, code: "Hi" },
  },
  {
    name: "High technology",
    id: 7,
    type: "TRADECODE",
    desc:
      "High technology worlds are among the most technogically advanced in the Imperium",
    values: { digit: 7, code: "Ht" },
  },
  {
    name: "Ice-capped",
    id: 8,
    type: "TRADECODE",
    desc:
      "Ice-capped worlds have most their surface liquid frozen in polar ice caps, and are cold and dry",
    values: { digit: 8, code: "IC" },
  },
  {
    name: "Industrial",
    id: 9,
    type: "TRADECODE",
    desc: "Industrial worlds are dominated by factories and cities",
    values: { digit: 9, code: "In" },
  },
  {
    name: "Low population",
    id: 10,
    type: "TRADECODE",
    desc:
      "Low population worlds have a population of only a few thousand or less",
    values: { digit: 10, code: "Lo" },
  },
  {
    name: "Low technology",
    id: 11,
    type: "TRADECODE",
    desc:
      "Low technology worlds are pre-industrial and cannot produce advanced goods",
    values: { digit: 11, code: "Lt" },
  },
  {
    name: "Non-Agricultural",
    id: 12,
    type: "TRADECODE",
    desc:
      "Non-Agricultural worlds are too dry or barren to support their population using conventional food production",
    values: { digit: 12, code: "Na" },
  },
  {
    name: "Non-Industrial",
    id: 13,
    type: "TRADECODE",
    desc:
      "Non-Industrial worlds are too low-population to maintain an industrial base",
    values: { digit: 13, code: "Ni" },
  },
  {
    name: "Poor",
    id: 14,
    type: "TRADECODE",
    desc:
      "Poor worlds lack resources, viable land, or sufficient population to be anything other than marginal colonies",
    values: { digit: 14, code: "Po" },
  },
  {
    name: "Rich",
    id: 15,
    type: "TRADECODE",
    desc:
      "Rich worlds are blessed with a stable government and viable biosphere, making them economic powerhouses.",
    values: { digit: 15, code: "Ri" },
  },
  {
    name: "Water World",
    id: 16,
    type: "TRADECODE",
    desc: "Water worlds are nearly entirely water/ocean",
    values: { digit: 16, code: "Wa" },
  },
  {
    name: "Vacuum",
    id: 17,
    type: "TRADECODE",
    desc: "Vacuum worlds have no atmosphere",
    values: { digit: 17, code: "Va" },
  },
];
