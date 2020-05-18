import { StarPortCodes } from "./getStarPort";

const TECHNOLOGIES = [
  {
    name: "TL 0: (Primitive)",
    id: 1,
    desc:
      "No technology. TL 0 species have only discovered the simplest tools and principles, and are on par with Earth's stone age.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 0 },
  },
  {
    name: "TL 1: (Primitive)",
    id: 1,
    desc:
      "Roughly on par with Bronze or Iron age technology. TL 1 science is mostly superstition, but they can manufacture weapons and work metals.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 1 },
  },
  {
    name: "TL 2: (Primitive)",
    id: 1,
    desc:
      "Renaissance technology. TL 2 brings with it a greater understanding of chemistry, physics, biology, and astronomy as well as the scientific method.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 2 },
  },
  {
    name: "TL 3: (Primitive)",
    id: 1,
    desc:
      "The advances of TL 2 are now applied, bringing the germ of industrial revolution and steam power. Primitive firearms now dominate the battlefield. This is roughly comparable to the early 19th century.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 3 },
  },
  {
    name: "TL 4: (Industrial)",
    id: 1,
    desc:
      "The transition to industrial revolution is complete, bringing plastics, radio, and other such inventions. Roughly comparable to to the late 19th/early 20th century.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 4 },
  },
  {
    name: "TL 5: (Industrial)",
    id: 1,
    desc:
      "TL 5 brings widespread electrification, telecommunications, and internal combustion. At the high end of the TL, atomics and primitive computing appear. Roughly on par with the mid-20th century.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 5 },
  },
  {
    name: "TL 6: (Industrial)",
    id: 1,
    desc:
      "TL 6 brings the development of fision power and more advanced computing. Advances in materials technology and roketry bring about the dawn of the space age.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 6 },
  },
  {
    name: "TL 7: (Pre-Stellar)",
    id: 1,
    desc:
      "A pre-stellar society can reach orbit reliably and has telecommunications satellites. Computers become common.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 7 },
  },
  {
    name: "TL 8: (Pre-Stellar)",
    id: 1,
    desc:
      "At TL 8, it is possible to reach other worlds in the same system, although terraforming or full colonization are not within the culture's capacity. Permanent space habitats become possible. Fusion power becomes commercially viable.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 8 },
  },
  {
    name: "TL 9: (Pre-Stellar)",
    id: 1,
    desc:
      "The defining element of TL 9 is the development of gravity manipulation, which makes space travel vastly safer and faster. This research leads to the development of the jump drive, which occurs near the end of this tech level. TL 9 cultures can colonize other worlds, although going to a colony is generally a one-way trip.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 9 },
  },
  {
    name: "TL 10: (Early Stellar)",
    id: 1,
    desc:
      "With the advent of jump, nearby systems are opened up. Orbital habitats and factories become common. Interstellar travel and trade lead to an economic boon. Colonies become much more viable.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 10 },
  },
  {
    name: "TL 11: (Early Stellar)",
    id: 1,
    desc:
      "The first true artificial intelligences become possible as computers are able to model synaptic networks. Grav-supported structures reach to the heavens. Jump-2 travel becomes possible, allowing easier travel beyond the one-Jump stellar mains.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 11 },
  },
  {
    name: "TL 12: (Average Stellar)",
    id: 1,
    desc:
      "Weather control revolutionizes terraforming and agriculture. Man-portable plasma weapons and carrier-mounted fusion guns make the battlefield untenable for unarmoured combatants. Jump-3 travel is developed.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 12 },
  },
  {
    name: "TL 13: (Average Stellar)",
    id: 1,
    desc:
      "The battle dress appears on the battlefield in response to the new weapons. Cloning of body parts becomes easy. Advances in hull design and thruster plates means that spacecraft can easily enter atmosphere and even go underwater. Jump-4 travel.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 13 },
  },
  {
    name: "TL 14: (Average Stellar)",
    id: 1,
    desc:
      "Fusion weapons become man-portable. Flying cities appear. Jump-5 travel.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 14 },
  },
  {
    name: "TL 15: (High Stellar)",
    id: 1,
    desc:
      "Black globe generators suggest a new direction for defensive technologies, while the development of of synthetic agnathics means that the human lifespan is now widely increased. Jump-6 travel.",
    type: "TECHNOLOGYLEVEL",
    values: { digit: 15 },
  },
];

export const getTechnology = (
  roll: number,
  starportName: StarPortCodes,
  sizeVal: number,
  atmosVal: number,
  hydroVal: number,
  popVal: number,
  govtVal: number
) => {
  let total = roll;

  /*starport modifiers*/
  if (starportName === "A") total = total + 6;
  if (starportName === "B") total = total + 4;
  if (starportName === "C") total = total + 2;
  if (starportName === "X") total = total - 4;

  /*size modifiers*/
  if (sizeVal <= 1) total = total + 2;
  if (sizeVal >= 2 && sizeVal <= 4) total = total + 1;

  /*atmosphere modifiers*/
  if (atmosVal <= 3) total = total + 1;
  if (atmosVal >= 10) total = total + 1;

  /*hydrology modifiers*/
  if (hydroVal === 0) total = total + 1;
  if (hydroVal === 9) total = total + 1;
  if (hydroVal === 10) total = total + 2;

  /*population modifiers*/
  if (popVal >= 1 && popVal <= 5) total = total + 1;
  if (popVal === 9) total = total + 1;
  if (popVal === 10) total = total + 2;
  if (popVal === 11) total = total + 3;
  if (popVal === 12) total = total + 4;

  /*government modifiers*/
  if (govtVal === 0) total = total + 1;
  if (govtVal === 5) total = total + 1;
  if (govtVal === 7) total = total + 2;
  if (govtVal === 13) total = total - 2;
  if (govtVal === 14) total = total - 2; /*technically impossible?*/

  if (total <= 0) return TECHNOLOGIES[0];
  if (total >= 15) return TECHNOLOGIES[15];

  return TECHNOLOGIES[total];
};
