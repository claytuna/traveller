import { DataObject } from "../";

export type CommNames =
  | "No comms"
  | "Basic comms"
  | "Advanced comms"
  | "Universal comms";

export interface CommObject extends DataObject<CommNames, "TECHCOMMS"> {
  values: { digit: number };
}

export const COMMS: CommObject[] = [
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
