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

export type BaseProbability = { type: BaseTypes; weight: number };

const starRoll = () => DiceRollService.roll([6, 6]);
const getBase = (baseRoll: number, baseType: BaseTypes, difficulty: number) => {
  return baseRoll >= difficulty ? baseType : "No " + baseType;
};
export const getAllBases = (probabilityArray: BaseProbability[]): string[] => {
  return probabilityArray.length
    ? probabilityArray.map((bp: BaseProbability) =>
        getBase(starRoll(), bp.type, bp.weight)
      )
    : ["None"];
};

export interface StartPortObject extends DataObject<StarPortCodes, "STARPORT"> {
  values: {
    berthingCost: number;
    fuel: FuelTypes;
    facilities: FacilityTypes;
    baseProbability: BaseProbability[];
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
      baseProbability: [
        { type: "Naval", weight: 8 },
        { type: "Scout", weight: 8 },
        { type: "Research", weight: 8 },
        { type: "TAS", weight: 8 },
        { type: "Imperial Consulate", weight: 8 },
      ],
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
      baseProbability: [
        { type: "Naval", weight: 8 },
        { type: "Scout", weight: 8 },
        { type: "Research", weight: 10 },
        { type: "TAS", weight: 6 },
        { type: "Imperial Consulate", weight: 8 },
        { type: "Pirate", weight: 12 },
      ],
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
      baseProbability: [
        { type: "Naval", weight: 8 },
        { type: "Research", weight: 10 },
        { type: "TAS", weight: 10 },
        { type: "Imperial Consulate", weight: 10 },
        { type: "Pirate", weight: 10 },
      ],
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
      baseProbability: [
        { type: "Scout", weight: 7 },
        { type: "Pirate", weight: 12 },
      ],
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
      baseProbability: [{ type: "Pirate", weight: 12 }],
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
