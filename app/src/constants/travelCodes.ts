import { DataObject } from "../";

export type TravelCodeNames = "Amber" | "Red" | "Green";

export interface TravelCodeObject
  extends DataObject<TravelCodeNames, "TRAVELCODE"> {
  values: {
    digit: number;
  };
}

export const TRAVEL_CODES: TravelCodeObject[] = [
  {
    name: "Amber",
    id: 0,
    desc:
      "Travel deemed dangerous by the Imperium. Typically undergoing revolution or have naturally hazardous environments",
    type: "TRAVELCODE",
    values: { digit: 0 },
  },
  {
    name: "Red",
    id: 1,
    desc:
      "Travel forbidden by the Imperium. Interdictions are enforced by the Imperial Navy.",
    type: "TRAVELCODE",
    values: { digit: 1 },
  },
  {
    name: "Green",
    id: 2,
    desc: "No travel code restrictions. All systems, go.",
    type: "TRAVELCODE",
    values: { digit: 2 },
  },
];
