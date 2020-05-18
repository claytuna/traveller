import { MathService as MS } from "../MathService";
export const POPULATIONS = [
  {
    name: "0",
    id: 0,
    desc: "Uninhabited",
    type: "POPULATION",
    values: { digit: 0, total: 0 },
  },
  {
    name: "1",
    id: 1,
    desc: "Tiny farmstead or single family; 1+",
    type: "POPULATION",
    values: { digit: 1, total: MS.random.call(null, 99, 1) },
  },
  {
    name: "2",
    id: 2,
    desc: "Village; 100+",
    type: "POPULATION",
    values: { digit: 2, total: MS.random.call(null, 999, 100) },
  },
  {
    name: "3",
    id: 3,
    desc: "1,000+",
    type: "POPULATION",
    values: { digit: 3, total: MS.random.call(null, 9999, 1000) },
  },
  {
    name: "4",
    id: 4,
    desc: "Small town; 10,000+",
    type: "POPULATION",
    values: { digit: 4, total: MS.random.call(null, 99999, 10000) },
  },
  {
    name: "5",
    id: 5,
    desc: "Average City; 100,000+",
    type: "POPULATION",
    values: { digit: 5, total: MS.random.call(null, 999999, 100000) },
  },
  {
    name: "6",
    id: 6,
    desc: "1,000,000+",
    type: "POPULATION",
    values: { digit: 6, total: MS.random.call(null, 9999999, 1000000) },
  },
  {
    name: "7",
    id: 7,
    desc: "Large City; 10,000,000",
    type: "POPULATION",
    values: { digit: 7, total: MS.random.call(null, 99999999, 10000000) },
  },
  {
    name: "8",
    id: 8,
    desc: "100,000,000+",
    type: "POPULATION",
    values: { digit: 8, total: MS.random.call(null, 999999999, 100000000) },
  },
  {
    name: "9",
    id: 9,
    desc: "Present day Earth; 1,000,000,000+",
    type: "POPULATION",
    values: {
      digit: 9,
      total: MS.random.call(null, 9999999999, 1000000000),
    },
  },
  {
    name: "A",
    id: 10,
    desc: "10,000,000,000+",
    type: "POPULATION",
    values: {
      digit: 10,
      total: MS.random.call(null, 99999999999, 10000000000),
    },
  },
  {
    name: "B",
    id: 11,
    desc: "Incredibly crowded world; 100,000,000,000+",
    type: "POPULATION",
    values: {
      digit: 11,
      total: MS.random.call(null, 999999999999, 100000000000),
    },
  },
  {
    name: "C",
    id: 12,
    desc: "World-city; 1,000,000,000,000+",
    type: "POPULATION",
    values: {
      digit: 12,
      total: MS.random.call(null, 9999999999999, 1000000000000),
    },
  },
];

export const getPopulation = (roll: number) => {
  return POPULATIONS[roll];
};
