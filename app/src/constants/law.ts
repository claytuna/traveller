import { DataObject } from "../";
export type LawNames =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export interface LawObject extends DataObject<LawNames, "LAW"> {
  values: {
    digit: number;
    weapons: string;
    drugs: string;
    information: string;
    technology: string;
    travellers: string;
    psionics: string;
  };
}

export const LAW: LawObject[] = [
  {
    name: "0",
    id: 0,
    desc: "",
    type: "LAW",
    values: {
      digit: 0,
      weapons: "No restrictions",
      drugs: "No restrictions",
      information: "No restrictions",
      technology: "No restrictions",
      travellers: "No restrictions",
      psionics: "No restrictions",
    },
  },
  {
    name: "1",
    id: 1,
    desc: "",
    type: "LAW",
    values: {
      digit: 1,
      weapons: "Poison gas, explosives, undetectable weapons, WMD",
      drugs: "Highly addictive and dangerous narcotics",
      information: "Intellect programs",
      technology: "Dangerous technologies such as nanotechnology",
      travellers:
        "Visitors must contacat planetary authorities by radio, landing is permitted anywhere",
      psionics: "Dangerous talents must be registered.",
    },
  },
  {
    name: "2",
    id: 2,
    desc: "",
    type: "LAW",
    values: {
      digit: 2,
      weapons: "Portable energy weapons (except ship-mounted weapons)",
      drugs: "Highly addictive narcotics",
      information: "Agent programs",
      technology: "Alien technology",
      travellers:
        "Visitors must report passenger manifest, landing is permitted anywhere",
      psionics:
        "All psionic powers must be registered; use of dangerous powers forbidden",
    },
  },
  {
    name: "3",
    id: 3,
    desc: "",
    type: "LAW",
    values: {
      digit: 3,
      weapons: "Heavy weapons",
      drugs: "Combat drugs",
      information: "Intrusion programs",
      technology: "TL 15 items",
      travellers: "Landing only at starport or other authorized sites",
      psionics: "Use of telepathy restricted to government approved telepaths",
    },
  },
  {
    name: "4",
    id: 4,
    desc: "",
    type: "LAW",
    values: {
      digit: 4,
      weapons: "Light assault weapons and submachine guns",
      drugs: "Addictive narcotics",
      information: "Security programs",
      technology: "TL 13 items",
      travellers: "Landing only at starport",
      psionics: "Use of teleportation and clairvoyance restricted",
    },
  },
  {
    name: "5",
    id: 5,
    desc: "",
    type: "LAW",
    values: {
      digit: 5,
      weapons: "Personal concealable weapons",
      drugs: "Agnathics",
      information: "Expert programs",
      technology: "TL 11 items",
      travellers:
        "Citizens must register offworld travel, visitors must register all business",
      psionics:
        "Use of all psionic powers restricted to government psionicists",
    },
  },
  {
    name: "6",
    id: 6,
    desc: "",
    type: "LAW",
    values: {
      digit: 6,
      weapons:
        "All firearms except shotguns and stunners; carrying weapons discouraged",
      drugs: "Fast and Slow drugs",
      information: "Recent news from offworld",
      technology: "TL 9 items",
      travellers:
        "Visitors discouraged; excessive contact with citizens forbidden",
      psionics: "Possession of psionic drugs banned",
    },
  },
  {
    name: "7",
    id: 7,
    desc: "",
    type: "LAW",
    values: {
      digit: 7,
      weapons: "Shotguns",
      drugs: "All narcotics",
      information:
        "Library programs, unfiltered data about other worlds. Free speech curtailed",
      technology: "TL 7 items",
      travellers:
        "Citizens may not leave planet; visitors may not leave starport",
      psionics: "Use of psionics forbidden",
    },
  },
  {
    name: "8",
    id: 8,
    desc: "",
    type: "LAW",
    values: {
      digit: 8,
      weapons: "All bladed weapons, stunners",
      drugs: "Medicinal drugs",
      information:
        "Information technology, any non-critical data from offworld, personal media",
      technology: "TL 5 items",
      travellers: "Landing permitted only to imperial agents",
      psionics: "Psionic-related technology banned",
    },
  },
  {
    name: "9",
    id: 9,
    desc: "",
    type: "LAW",
    values: {
      digit: 9,
      weapons: "Any weapons",
      drugs: "All drugs",
      information: "Any data from offworld. No free press",
      technology: "TL 3 items",
      travellers: "No offworlders permitted",
      psionics: "All psionics",
    },
  },
];
