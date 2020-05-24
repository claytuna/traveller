import { MathService as MS } from "../services";
import { DataObject } from "../";

export type PopulationNames =
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
  | "A"
  | "B"
  | "C";

export interface PopulationObject
  extends DataObject<PopulationNames, "POPULATION"> {
  values: {
    //can be dynamically generated
    total: number;
    minPop: number;
    maxPop: number;
  };
}

export const POPULATIONS: PopulationObject[] = [
  {
    name: "0",
    id: 0,
    desc: "Uninhabited",
    type: "POPULATION",
    values: {
      minPop: 0,
      maxPop: 0,
      total: 0,
    },
  },
  {
    name: "1",
    id: 1,
    desc: "Tiny farmstead or single family; 1+",
    type: "POPULATION",
    values: {
      minPop: 1,
      maxPop: 99,
      total: MS.random(99, 1),
    },
  },
  {
    name: "2",
    id: 2,
    desc: "Village; 100+",
    type: "POPULATION",
    values: {
      minPop: 100,
      maxPop: 999,
      total: MS.random(999, 100),
    },
  },
  {
    name: "3",
    id: 3,
    desc: "1,000+",
    type: "POPULATION",
    values: {
      minPop: 1000,
      maxPop: 9999,
      total: MS.random(9999, 1000),
    },
  },
  {
    name: "4",
    id: 4,
    desc: "Small town; 10,000+",
    type: "POPULATION",
    values: {
      minPop: 10000,
      maxPop: 99999,
      total: MS.random(99999, 10000),
    },
  },
  {
    name: "5",
    id: 5,
    desc: "Average City; 100,000+",
    type: "POPULATION",
    values: {
      minPop: 100000,
      maxPop: 999999,
      total: MS.random(999999, 100000),
    },
  },
  {
    name: "6",
    id: 6,
    desc: "1,000,000+",
    type: "POPULATION",
    values: {
      minPop: 1000000,
      maxPop: 9999999,
      total: MS.random(9999999, 1000000),
    },
  },
  {
    name: "7",
    id: 7,
    desc: "Large City; 10,000,000",
    type: "POPULATION",
    values: {
      minPop: 10000000,
      maxPop: 99999999,
      total: MS.random(99999999, 10000000),
    },
  },
  {
    name: "8",
    id: 8,
    desc: "100,000,000+",
    type: "POPULATION",
    values: {
      minPop: 100000000,
      maxPop: 999999999,
      total: MS.random(999999999, 100000000),
    },
  },
  {
    name: "9",
    id: 9,
    desc: "Present day Earth; 1,000,000,000+",
    type: "POPULATION",
    values: {
      minPop: 1000000000,
      maxPop: 9999999999,
      total: MS.random(9999999999, 1000000000),
    },
  },
  {
    name: "A",
    id: 10,
    desc: "10,000,000,000+",
    type: "POPULATION",
    values: {
      minPop: 10000000000,
      maxPop: 99999999999,
      total: MS.random(99999999999, 10000000000),
    },
  },
  {
    name: "B",
    id: 11,
    desc: "Incredibly crowded world; 100,000,000,000+",
    type: "POPULATION",
    values: {
      minPop: 100000000000,
      maxPop: 999999999999,
      total: MS.random(999999999999, 100000000000),
    },
  },
  {
    name: "C",
    id: 12,
    desc: "World-city; 1,000,000,000,000+",
    type: "POPULATION",
    values: {
      minPop: 1000000000000,
      maxPop: 9999999999999,
      total: MS.random(9999999999999, 1000000000000),
    },
  },
];
