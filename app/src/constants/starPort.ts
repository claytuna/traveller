import { DataObject } from "../";
import { DiceRollService } from "../services";

export type StarPortCodes = "A" | "B" | "C" | "D" | "E" | "X";
export type BaseTypes =
  | "Naval"
  | "Scout"
  | "Research"
  | "TAS"
  | "Imperial Consulate"
  | "Pirate";
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

export interface StartPortObject extends DataObject<StarPortCodes, "STARPORT"> {
  values: {
    berthingCost: number;
    fuel: FuelTypes;
    facilities: FacilityTypes;
    baseProbability: { type: BaseTypes; weight: number }[];
    bases: string[];
  };
}

export const STARPORTS: StartPortObject[] = [
  {
    name: "A",
    id: 0,
    desc: "Excellent",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: DiceRollService.roll([6]) * 1000,
      fuel: "Refined",
      facilities: "Shipyard (all), Repair",
      baseProbability: [],
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
      baseProbability: [],
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
    id: 2,
    desc: "Routine",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: DiceRollService.roll([6]) * 100,
      fuel: "Unrefined",
      facilities: "Shipyard (small craft), Repair",
      baseProbability: [],
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
    id: 3,
    desc: "Poor",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: DiceRollService.roll([6]) * 10,
      fuel: "Unrefined",
      facilities: "Limited repair (structural repairs only, not systems)",
      baseProbability: [],
      bases: [
        getBase(starRoll(), "Scout", 7),
        getBase(starRoll(), "Pirate", 12),
      ],
    },
  },
  {
    name: "E",
    id: 4,
    desc: "Frontier",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: 0,
      fuel: "None",
      facilities: "None",
      baseProbability: [],
      bases: [getBase(starRoll(), "Pirate", 12)],
    },
  },
  {
    name: "X",
    id: 5,
    desc: "No starport",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: 0,
      fuel: "None",
      facilities: "None",
      baseProbability: [],
      bases: ["None"],
    },
  },
];
