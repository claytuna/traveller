import { DiceRollService } from "../DiceRollService";

export type BaseTypes =
  | "Naval"
  | "Scout"
  | "Research"
  | "TAS"
  | "Imperial Consulate"
  | "Pirate";
export type StarPortCodes = "A" | "B" | "C" | "D" | "E" | "X";
export type FuelTypes = "Refined" | "Unrefined" | "None";
export type FacilityTypes =
  | "Shipyard (all), Repair"
  | "Shipyard (spacecraft), Repair"
  | "Shipyard (small craft), Repair"
  | "Limited repair (structural repairs only, not systems)"
  | "None";
const starRoll = () => DiceRollService.roll([6, 6]);
const getBase = (baseRoll: number, baseType: BaseTypes, difficulty: number) => {
  return baseRoll >= difficulty ? baseType : "No " + baseType;
};

var STARPORTS: {
  name: StarPortCodes;
  id: number;
  desc: string;
  qty?: number;
  type: "STARPORT";
  values: {
    berthingCost: number;
    fuel: FuelTypes;
    facilities: FacilityTypes;
    bases: string[];
  };
}[] = [
  {
    name: "A",
    id: 1,
    desc: "Excellent",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: DiceRollService.roll([6]) * 1000,
      fuel: "Refined",
      facilities: "Shipyard (all), Repair",
      bases: [
        getBase(starRoll(), "Naval", 8),
        getBase(starRoll(), "Scout", 10),
        getBase(starRoll(), "Research", 8),
        getBase(starRoll(), "TAS", 4),
        getBase(starRoll(), "Imperial Consulate", 6),
      ],
    },
  },
  {
    name: "B",
    id: 1,
    desc: "Good",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: DiceRollService.roll([6]) * 500,
      fuel: "Refined",
      facilities: "Shipyard (spacecraft), Repair",
      bases: [
        getBase(starRoll(), "Naval", 8),
        getBase(starRoll(), "Scout", 8),
        getBase(starRoll(), "Research", 10),
        getBase(starRoll(), "TAS", 6),
        getBase(starRoll(), "Imperial Consulate", 8),
        getBase(starRoll(), "Pirate", 12),
      ],
    },
  },
  {
    name: "C",
    id: 1,
    desc: "Routine",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: DiceRollService.roll([6]) * 100,
      fuel: "Unrefined",
      facilities: "Shipyard (small craft), Repair",
      bases: [
        getBase(starRoll(), "Scout", 8),
        getBase(starRoll(), "Research", 10),
        getBase(starRoll(), "TAS", 10),
        getBase(starRoll(), "Imperial Consulate", 10),
        getBase(starRoll(), "Pirate", 10),
      ],
    },
  },
  {
    name: "D",
    id: 1,
    desc: "Poor",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: DiceRollService.roll([6]) * 10,
      fuel: "Unrefined",
      facilities: "Limited repair (structural repairs only, not systems)",
      bases: [
        getBase(starRoll(), "Scout", 7),
        getBase(starRoll(), "Pirate", 12),
      ],
    },
  },
  {
    name: "E",
    id: 1,
    desc: "Frontier",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: 0,
      fuel: "None",
      facilities: "None",
      bases: [getBase(starRoll(), "Pirate", 12)],
    },
  },
  {
    name: "X",
    id: 1,
    desc: "No starport",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: 0,
      fuel: "None",
      facilities: "None",
      bases: ["None"],
    },
  },
];

export const getStarPort = (roll: number) => {
  if (roll <= 2) return STARPORTS[5];
  if (roll === 3 || roll === 4) return STARPORTS[4];
  if (roll === 5 || roll === 6) return STARPORTS[3];
  if (roll === 7 || roll === 8) return STARPORTS[2];
  if (roll === 9 || roll === 10) return STARPORTS[1];
  if (roll >= 11) return STARPORTS[0];

  return STARPORTS[5];
};
