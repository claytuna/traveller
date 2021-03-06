import { DataObject } from "../";

export type AtmosphereNames =
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
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";

export interface AtmosphereObject
  extends DataObject<AtmosphereNames, "ATMOSPHERE"> {
  values: {
    digit: number;
    pressure: string;
    gear: string;
  };
}

export const ATMOSPHERES: AtmosphereObject[] = [
  {
    name: "0",
    id: 1,
    desc: "None",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 0, pressure: "0.00", gear: "VaccSuit" },
  },
  {
    name: "1",
    id: 2,
    desc: "Trace",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 1, pressure: "0.001-0.09", gear: "VaccSuit" },
  },
  {
    name: "2",
    id: 3,
    desc: "Very Thin, Tainted",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 2, pressure: "0.1-0.42", gear: "Respirator, Filter" },
  },
  {
    name: "3",
    id: 4,
    desc: "Very Thin",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 3, pressure: "0.1-0.42", gear: "Respirator" },
  },
  {
    name: "4",
    id: 5,
    desc: "Thin, Tainted",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 4, pressure: "0.43-0.7", gear: "Filter" },
  },
  {
    name: "5",
    id: 6,
    desc: "Thin",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 5, pressure: "0.43-0.7", gear: "" },
  },
  {
    name: "6",
    id: 7,
    desc: "Standard",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 6, pressure: "0.71-1.49", gear: "" },
  },
  {
    name: "7",
    id: 8,
    desc: "Standard, Tainted",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 7, pressure: "0.71-1.49", gear: "Filter" },
  },
  {
    name: "8",
    id: 9,
    desc: "Dense",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 8, pressure: "1.5-2.49", gear: "" },
  },
  {
    name: "9",
    id: 10,
    desc: "Dense, Tainted",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 9, pressure: "1.5-2.49", gear: "Filter" },
  },
  {
    name: "A",
    id: 11,
    desc: "Exotic",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 10, pressure: "Varies", gear: "AirSupply" },
  },
  {
    name: "B",
    id: 12,
    desc: "Corrosive",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 11, pressure: "Varies", gear: "VaccSuit" },
  },
  {
    name: "C",
    id: 13,
    desc: "Insidious",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 12, pressure: "Varies", gear: "VaccSuit" },
  },
  {
    name: "D",
    id: 14,
    desc: "Dense, High",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 13, pressure: "2.5+", gear: "" },
  },
  {
    name: "E",
    id: 15,
    desc: "Thin, Low",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 14, pressure: "<0.5", gear: "" },
  },
  {
    name: "F",
    id: 16,
    desc: "Unusual",
    qty: 1,
    type: "ATMOSPHERE",
    values: { digit: 15, pressure: "Varies", gear: "Varies" },
  },
];
