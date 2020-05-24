import { DiceRollService, getGovernment } from "../services";
import { DataObject } from "../";
import { GovernmentObject, GOVERNMENTS } from "./governments";

export type FactionNames =
  | "Obscure group"
  | "Fringe group"
  | "Minor group"
  | "Notable group"
  | "Significant"
  | "Overwhelming popular support";

export interface FactionObject extends DataObject<FactionNames, "FACTION"> {
  values: {
    digit: number;
    govt?: GovernmentObject;
  };
}

export const FACTIONS: FactionObject[] = [
  {
    name: "Obscure group",
    id: 0,
    desc: "Few have heard of them; no popular support",
    type: "FACTION",
    values: {
      digit: 0,
      govt: getFactionGovt(),
    },
  },
  {
    name: "Fringe group",
    id: 1,
    desc: "Few supporters; obscure",
    type: "FACTION",
    values: {
      digit: 1,
      govt: getFactionGovt(),
    },
  },
  {
    name: "Minor group",
    id: 2,
    desc: "Some supporters; barely known",
    type: "FACTION",
    values: {
      digit: 2,
      govt: getFactionGovt(),
    },
  },
  {
    name: "Notable group",
    id: 3,
    desc: "Significant support; well-known",
    type: "FACTION",
    values: {
      digit: 3,
      govt: getFactionGovt(),
    },
  },
  {
    name: "Significant",
    id: 4,
    desc: "Nearly as powerful as the government",
    type: "FACTION",
    values: {
      digit: 4,
      govt: getFactionGovt(),
    },
  },
  {
    name: "Overwhelming popular support",
    id: 5,
    desc: "More powerful than the government",
    type: "FACTION",
    values: {
      digit: 5,
      govt: getFactionGovt(),
    },
  },
];

export function getFactionGovt() {
  return getGovernment(DiceRollService.roll([12]), 0, 1, GOVERNMENTS);
}
