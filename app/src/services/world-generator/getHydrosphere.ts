import { MathService as MS } from "../MathService";
import { TemperatureName } from "./getTemperature";
const HYDROSPHERES = [
  {
    name: "0",
    id: 0,
    desc: "Desert world",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 0,
      percentRange: "0%-5%",
      percent: MS.random.call(null, 5, 0),
    },
  },
  {
    name: "1",
    id: 1,
    desc: "Dry world",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 1,
      percentRange: "6%-15%",
      percent: MS.random.call(null, 15, 6),
    },
  },
  {
    name: "2",
    id: 2,
    desc: "A few small seas",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 2,
      percentRange: "16%-25%",
      percent: MS.random.call(null, 25, 16),
    },
  },
  {
    name: "3",
    id: 3,
    desc: "Small seas and oceans",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 3,
      percentRange: "26%-35%",
      percent: MS.random.call(null, 35, 26),
    },
  },
  {
    name: "4",
    id: 4,
    desc: "Wet world",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 4,
      percentRange: "36%-45%",
      percent: MS.random.call(null, 45, 36),
    },
  },
  {
    name: "5",
    id: 5,
    desc: "Large oceans",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 5,
      percentRange: "46%-55%",
      percent: MS.random.call(null, 55, 46),
    },
  },
  {
    name: "6",
    id: 6,
    desc: "Moderate seas and oceans",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 6,
      percentRange: "56%-65%",
      percent: MS.random.call(null, 65, 56),
    },
  },
  {
    name: "7",
    id: 7,
    desc: "Earth-like; large oceans, rivers, seas",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 7,
      percentRange: "66%-75%",
      percent: MS.random.call(null, 75, 66),
    },
  },
  {
    name: "8",
    id: 8,
    desc: "Water world",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 8,
      percentRange: "76%-85%",
      percent: MS.random.call(null, 85, 76),
    },
  },
  {
    name: "9",
    id: 9,
    desc: "Only a few small islands and archipelagoes",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 9,
      percentRange: "86%-95%",
      percent: MS.random.call(null, 95, 86),
    },
  },
  {
    name: "A",
    id: 10,
    desc: "Almost entirely water",
    qty: 1,
    type: "HYDROSPHERE",
    values: {
      digit: 10,
      percentRange: "96%-100%",
      percent: MS.random.call(null, 100, 96),
    },
  },
];

export const getHydrosphere = (
  roll: number,
  sizeVal: number,
  atmosVal: number,
  tempVal: TemperatureName
) => {
  if (sizeVal <= 1) return HYDROSPHERES[0];

  if (atmosVal <= 1) roll = roll - 4;
  if (atmosVal >= 10 && atmosVal <= 12) roll = roll - 4;

  if (tempVal === "Hot") roll = roll - 2;
  if (tempVal === "Roasting") roll = roll - 6;

  if (roll <= 0) return HYDROSPHERES[0];
  if (roll >= 11) return HYDROSPHERES[10];

  return HYDROSPHERES[roll - 1];
};
