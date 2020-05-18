import { MathService as MS } from "../MathService";

export const getSize = (roll: number) => {
  const sizeOptions = [
    {
      name: "0",
      id: 1,
      desc: "<800km; Asteroid; negligible gravity",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 0,
        diameter: MS.random.call(null, 1600, 0),
        gravity: 0.001,
      },
    },
    {
      name: "1",
      id: 2,
      desc: "800-1,600km",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 1,
        diameter: MS.random.call(null, 1600, 800),
        gravity: 0.05,
      },
    },
    {
      name: "2",
      id: 3,
      desc: "1600-3,200km; Triton",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 2,
        diameter: MS.random.call(null, 3200, 1600),
        gravity: 0.15,
      },
    },
    {
      name: "3",
      id: 4,
      desc: "3,200-4,800km; Mercury",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 3,
        diameter: MS.random.call(null, 4800, 3200),
        gravity: 0.25,
      },
    },
    {
      name: "4",
      id: 5,
      desc: "4,800-6,400km; Mars",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 4,
        diameter: MS.random.call(null, 6400, 4800),
        gravity: 0.35,
      },
    },
    {
      name: "5",
      id: 6,
      desc: "6,400-8,000km",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 5,
        diameter: MS.random.call(null, 8000, 6400),
        gravity: 0.45,
      },
    },
    {
      name: "6",
      id: 7,
      desc: "8,000-9,600km",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 6,
        diameter: MS.random.call(null, 9600, 8000),
        gravity: 0.7,
      },
    },
    {
      name: "7",
      id: 8,
      desc: "9,600-11,200km",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 7,
        diameter: MS.random.call(null, 11200, 9600),
        gravity: 0.9,
      },
    },
    {
      name: "8",
      id: 9,
      desc: "11,200-12,800km; Earth-like",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 8,
        diameter: MS.random.call(null, 12800, 11200),
        gravity: 1.0,
      },
    },
    {
      name: "9",
      id: 10,
      desc: "12,800-14,000km",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 9,
        diameter: MS.random.call(null, 14000, 12800),
        gravity: 1.25,
      },
    },
    {
      name: "A",
      id: 11,
      desc: ">16,000km.",
      qty: 1,
      type: "SIZE",
      values: {
        digit: 10,
        diameter: MS.random.call(null, 500000, 14000),
        gravity: 1.4,
      },
    },
  ];

  return sizeOptions[roll - 1];
};
