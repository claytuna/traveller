var COMMS = [
  {
    name: "No comms",
    id: 0,
    desc:
      "No telecommunication system whatsoever except for what the starport offers.",
    type: "TECHCOMMS",
    values: { digit: 0 },
  },
  {
    name: "Basic comms",
    id: 0,
    desc: "Radio and telephone communications between major cities.",
    type: "TECHCOMMS",
    values: { digit: 1 },
  },
  {
    name: "Advanced comms",
    id: 0,
    desc: "More advanced communications grid with only occasional gaps",
    type: "TECHCOMMS",
    values: { digit: 2 },
  },
  {
    name: "Universal comms",
    id: 0,
    desc:
      "Communications grid accesible from every point on the surface - satellites cheap and easy to deploy.",
    type: "TECHCOMMS",
    values: { digit: 3 },
  },
];

export const getCommunications = (techLevel: number) => {
  if (techLevel <= 3) return COMMS[0];
  if (techLevel >= 4 && techLevel <= 6) return COMMS[1];
  if (techLevel >= 7 && techLevel <= 8) return COMMS[2];
  if (techLevel >= 9) return COMMS[3];
};
