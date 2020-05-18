export type TemperatureName =
  | "Extreme"
  | "Frozen"
  | "Cold"
  | "Temperate"
  | "Hot"
  | "Roasting";
export type TemperatureObject = {
  name: TemperatureName;
  id: number;
  desc: string;
  type: "TEMPERATURE";
  values: { maxTemp: string; minTemp: string };
};
const TEMPERATURES: TemperatureObject[] = [
  {
    name: "Extreme",
    id: 0,
    desc: "Temperatures range from roasting during the day, frozen at night.",
    type: "TEMPERATURE",
    values: { maxTemp: ">81° C", minTemp: "<-51° C" },
  },
  {
    name: "Frozen",
    id: 1,
    desc: "Frozen world. No liquid water, very dry atmosphere.",
    type: "TEMPERATURE",
    values: { maxTemp: "-51° C", minTemp: "<-51° C" },
  },
  {
    name: "Cold",
    id: 2,
    desc: "Icy world. Little liquid water, extensive ice caps, few clouds.",
    type: "TEMPERATURE",
    values: { maxTemp: "0° C", minTemp: "-50° C" },
  },
  {
    name: "Temperate",
    id: 3,
    desc:
      "Temperate world. Liquid and vaporized water are common, moderate ice caps.",
    type: "TEMPERATURE",
    values: { maxTemp: "30° C", minTemp: "0° C" },
  },
  {
    name: "Hot",
    id: 4,
    desc:
      "Hot world. Small or no ice caps, little liquid water. Most water in the form of clouds",
    type: "TEMPERATURE",
    values: { maxTemp: "80° C", minTemp: "31° C" },
  },
  {
    name: "Roasting",
    id: 5,
    desc: "Boiling world. No ice caps, little to no liquid water.",
    type: "TEMPERATURE",
    values: { maxTemp: ">81° C", minTemp: "81° C" },
  },
];

export const getTemperature = (
  roll: number,
  atmosVal: number,
  habitableZone = 1
): TemperatureObject => {
  /* Atmosphere modifiers */
  if (atmosVal === 0 || atmosVal === 1) return TEMPERATURES[0];
  if (atmosVal === 2 || atmosVal === 3) roll = roll - 2;
  if (atmosVal === 4 || atmosVal === 5 || atmosVal === 14) roll = roll - 1;
  if (atmosVal === 6 || atmosVal === 7) roll = roll;
  if (atmosVal === 8 || atmosVal === 9) roll = roll + 1;
  if (atmosVal === 10 || atmosVal === 13 || atmosVal === 15) roll = roll + 2;
  if (atmosVal === 11 || atmosVal === 12) roll = roll + 6;

  /* habitableZone is the proximity to the system's star; 0 is hot edge, 1 is normal, 2 is cold edge */
  if (habitableZone === 0) roll = roll + 4;
  if (habitableZone === 2) roll = roll - 4;

  if (roll <= 2) return TEMPERATURES[1];
  if (roll >= 3 && roll <= 4) return TEMPERATURES[2];
  if (roll >= 5 && roll <= 9) return TEMPERATURES[3];
  if (roll >= 10 && roll <= 11) return TEMPERATURES[4];
  if (roll >= 12) return TEMPERATURES[5];

  /* fallback: not sure if this is possible */
  return TEMPERATURES[0];
};
