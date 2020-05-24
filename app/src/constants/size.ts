import { MathService as MS } from "../services";
import { DataObject } from "../";

export type SizeNames =
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
  | "A";

export interface SizeObject extends DataObject<SizeNames, "SIZE"> {
  values: {
    minDiameter: number;
    maxDiameter: number;
    //can be dynamically generated
    diameter: number;
    gravity: number;
    digit: number;
  };
}

export const SIZE: SizeObject[] = [
  {
    name: "0",
    id: 0,
    desc: "<800km; Asteroid; negligible gravity",
    type: "SIZE",
    values: {
      digit: 0,
      minDiameter: 0,
      maxDiameter: 800,
      diameter: MS.random(800, 0),
      gravity: 0.001,
    },
  },
  {
    name: "1",
    id: 1,
    desc: "800-1,600km",
    type: "SIZE",
    values: {
      digit: 1,
      minDiameter: 801,
      maxDiameter: 1600,
      diameter: MS.random(1600, 801),
      gravity: 0.05,
    },
  },
  {
    name: "2",
    id: 2,
    desc: "1600-3,200km; Triton",
    type: "SIZE",
    values: {
      digit: 2,
      minDiameter: 1601,
      maxDiameter: 3200,
      diameter: MS.random(3200, 1601),
      gravity: 0.15,
    },
  },
  {
    name: "3",
    id: 3,
    desc: "3,200-4,800km; Mercury",
    type: "SIZE",
    values: {
      digit: 3,
      minDiameter: 3201,
      maxDiameter: 4800,
      diameter: MS.random(4800, 3201),
      gravity: 0.25,
    },
  },
  {
    name: "4",
    id: 4,
    desc: "4,800-6,400km; Mars",
    type: "SIZE",
    values: {
      digit: 4,
      minDiameter: 4801,
      maxDiameter: 6400,
      diameter: MS.random(6400, 4801),
      gravity: 0.35,
    },
  },
  {
    name: "5",
    id: 5,
    desc: "6,400-8,000km",
    type: "SIZE",
    values: {
      digit: 5,
      minDiameter: 6401,
      maxDiameter: 8000,
      diameter: MS.random(8000, 6401),
      gravity: 0.45,
    },
  },
  {
    name: "6",
    id: 6,
    desc: "8,000-9,600km",
    type: "SIZE",
    values: {
      digit: 6,
      minDiameter: 8001,
      maxDiameter: 9600,
      diameter: MS.random(9600, 8000),
      gravity: 0.7,
    },
  },
  {
    name: "7",
    id: 7,
    desc: "9,600-11,200km",
    type: "SIZE",
    values: {
      digit: 7,
      minDiameter: 9601,
      maxDiameter: 11200,
      diameter: MS.random(11200, 9600),
      gravity: 0.9,
    },
  },
  {
    name: "8",
    id: 8,
    desc: "11,200-12,800km; Earth-like",
    type: "SIZE",
    values: {
      digit: 8,
      minDiameter: 11201,
      maxDiameter: 12800,
      diameter: MS.random(12800, 11200),
      gravity: 1.0,
    },
  },
  {
    name: "9",
    id: 9,
    desc: "12,800-14,000km",
    type: "SIZE",
    values: {
      digit: 9,
      minDiameter: 12801,
      maxDiameter: 14000,
      diameter: MS.random(14000, 12801),
      gravity: 1.25,
    },
  },
  {
    name: "A",
    id: 10,
    desc: ">16,000km.",
    type: "SIZE",
    values: {
      digit: 10,
      minDiameter: 14001,
      maxDiameter: 500000,
      diameter: MS.random(500000, 14001),
      gravity: 1.4,
    },
  },
];
