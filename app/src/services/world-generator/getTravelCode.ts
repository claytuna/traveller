const TRAVEL_CODES = [
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
    id: 0,
    desc:
      "Travel forbidden by the Imperium. Interdictions are enforced by the Imperial Navy.",
    type: "TRAVELCODE",
    values: { digit: 1 },
  },
];

export const getTravelCode = (
  atmosVal: number,
  govtVal: number,
  lawVal: number
) => {
  if (atmosVal >= 10) return TRAVEL_CODES[0];
  if (govtVal === 0 || govtVal === 7 || govtVal === 10) return TRAVEL_CODES[0];
  if (lawVal === 0 || lawVal >= 9) return TRAVEL_CODES[0];

  return undefined;
};
