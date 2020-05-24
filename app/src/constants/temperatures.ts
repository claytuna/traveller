import { DataObject } from "../";

export type TemperatureNames =
  | "Cold"
  | "Extreme"
  | "Frozen"
  | "Hot"
  | "Roasting"
  | "Temperate";

export interface TemperatureObject
  extends DataObject<TemperatureNames, "TEMPERATURE"> {
  values: {
    maxTemp: string;
    minTemp: string;
  };
}

export const TEMPERATURES: TemperatureObject[] = [
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
