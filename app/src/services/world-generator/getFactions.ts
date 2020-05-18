import { DiceRollService } from "../DiceRollService";
import { getGovernment } from "./getGovernment";

const FACTIONS = [
  {
    name: "Obscure group",
    id: 0,
    desc: "Few have heard of them; no popular support",
    qty: 1,
    type: "FACTION",
    values: { digit: 0, govt: getFactionGovt() },
  },
  {
    name: "Fringe group",
    id: 1,
    desc: "Few supporters; obscure",
    qty: 1,
    type: "FACTION",
    values: { digit: 0, govt: getFactionGovt() },
  },
  {
    name: "Minor group",
    id: 2,
    desc: "Some supporters; barely known",
    qty: 1,
    type: "FACTION",
    values: { digit: 0, govt: getFactionGovt() },
  },
  {
    name: "Notable group",
    id: 3,
    desc: "Significant support; well-known",
    qty: 1,
    type: "FACTION",
    values: { digit: 0, govt: getFactionGovt() },
  },
  {
    name: "Significant",
    id: 4,
    desc: "Nearly as powerful as the government",
    qty: 1,
    type: "FACTION",
    values: { digit: 0, govt: getFactionGovt() },
  },
  {
    name: "Overwhelming popular support",
    id: 5,
    desc: "More powerful than the government",
    qty: 1,
    type: "FACTION",
    values: { digit: 0, govt: getFactionGovt() },
  },
];

function getFactionGovt() {
  return getGovernment(DiceRollService.roll([12]), 0, 1);
}

export const getFactions = (roll: number, popVal: number, govtVal: number) => {
  var result = [];

  if (popVal <= 0) return [];

  if (govtVal === 0 || govtVal === 7) roll = roll + 1;
  if (govtVal >= 10) roll = roll - 1;

  if (roll === 0) return [];

  var sizeRoll;
  for (var i = 0; i < roll; i++) {
    sizeRoll = DiceRollService.roll([6, 6]);
    if (sizeRoll >= 1 && sizeRoll <= 3) {
      result.push({
        ...FACTIONS[0],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 4 && sizeRoll <= 5) {
      result.push({
        ...FACTIONS[1],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 6 && sizeRoll <= 7) {
      result.push({
        ...FACTIONS[2],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 8 && sizeRoll <= 9) {
      result.push({
        ...FACTIONS[3],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll >= 10 && sizeRoll <= 11) {
      result.push({
        ...FACTIONS[4],
        values: { govt: getFactionGovt() },
      });
    }
    if (sizeRoll > 11) {
      result.push({
        ...FACTIONS[5],
        values: { govt: getFactionGovt() },
      });
    }
  }

  return result;
};
