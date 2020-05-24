import { MathService as MS } from "../services";
import { DataObject } from "../";

export type HydrosphereNames =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "A";

export interface HydrosphereObject
  extends DataObject<HydrosphereNames, "HYDROSPHERE"> {
  values: {
    digit: number;
    min: number;
    max: number;
    percentRange: string;
    //could be dynamic
    percent: number;
  };
}

export const HYDROSPHERES: HydrosphereObject[] = [
  {
    name: "0",
    id: 0,
    desc: "Desert world",
    type: "HYDROSPHERE",
    values: {
      digit: 0,
      min: 0,
      max: 5,
      percentRange: "0%-5%",
      percent: MS.random(5, 0),
    },
  },
  {
    name: "1",
    id: 1,
    desc: "Dry world",
    type: "HYDROSPHERE",
    values: {
      digit: 1,
      min: 6,
      max: 15,
      percentRange: "6%-15%",
      percent: MS.random(15, 6),
    },
  },
  {
    name: "2",
    id: 2,
    desc: "A few small seas",
    type: "HYDROSPHERE",
    values: {
      digit: 2,
      min: 16,
      max: 25,
      percentRange: "16%-25%",
      percent: MS.random(25, 16),
    },
  },
  {
    name: "3",
    id: 3,
    desc: "Small seas and oceans",
    type: "HYDROSPHERE",
    values: {
      digit: 3,
      min: 26,
      max: 35,
      percentRange: "26%-35%",
      percent: MS.random(35, 26),
    },
  },
  {
    name: "4",
    id: 4,
    desc: "Wet world",
    type: "HYDROSPHERE",
    values: {
      digit: 4,
      min: 36,
      max: 45,
      percentRange: "36%-45%",
      percent: MS.random(45, 36),
    },
  },
  {
    name: "5",
    id: 5,
    desc: "Large oceans",
    type: "HYDROSPHERE",
    values: {
      digit: 5,
      min: 46,
      max: 55,
      percentRange: "46%-55%",
      percent: MS.random(55, 46),
    },
  },
  {
    name: "6",
    id: 6,
    desc: "Moderate seas and oceans",
    type: "HYDROSPHERE",
    values: {
      digit: 6,
      min: 56,
      max: 65,
      percentRange: "56%-65%",
      percent: MS.random(65, 56),
    },
  },
  {
    name: "7",
    id: 7,
    desc: "Earth-like; large oceans, rivers, seas",
    type: "HYDROSPHERE",
    values: {
      digit: 7,
      min: 66,
      max: 75,
      percentRange: "66%-75%",
      percent: MS.random(75, 66),
    },
  },
  {
    name: "8",
    id: 8,
    desc: "Water world",
    type: "HYDROSPHERE",
    values: {
      digit: 8,
      min: 76,
      max: 85,
      percentRange: "76%-85%",
      percent: MS.random(85, 76),
    },
  },
  {
    name: "9",
    id: 9,
    desc: "Only a few small islands and archipelagoes",
    type: "HYDROSPHERE",
    values: {
      digit: 9,
      min: 86,
      max: 95,
      percentRange: "86%-95%",
      percent: MS.random(95, 86),
    },
  },
  {
    name: "A",
    id: 10,
    desc: "Almost entirely water",
    type: "HYDROSPHERE",
    values: {
      digit: 10,
      min: 96,
      max: 100,
      percentRange: "96%-100%",
      percent: MS.random(100, 96),
    },
  },
];
