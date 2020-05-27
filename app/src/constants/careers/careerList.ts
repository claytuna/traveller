import { DataObject } from "../..";
import { StatKeys } from "../characteristics";
import { SkillKeys } from "../skills";
import { AGENT } from "./agent";
import { ARMY } from "./army";

export type CareerKeys =
  | "AGENT"
  | "AGENT_LAW_ENFORCEMENT"
  | "AGENT_INTELLIGENCE"
  | "AGENT_CORPORATE"
  | "ARMY"
  | "ARMY_SUPPORT"
  | "ARMY_INFANTRY"
  | "ARMY_CAVALRY"
  | "CITIZEN"
  | "CITIZEN_CORPORATE"
  | "CITIZEN_WORKER"
  | "CITIZEN_COLONIST"
  | "DRIFTER"
  | "DRIFTER_BARBARIAN"
  | "DRIFTER_WANDERER"
  | "DRIFTER_SCAVENGER"
  | "ENTERTAINER"
  | "ENTERTAINER_ARTIST"
  | "ENTERTAINER_JOURNALIST"
  | "ENTERTAINER_PERFORMER"
  | "MARINES"
  | "MARINES_SUPPORT"
  | "MARINES_STAR_MARINE"
  | "MARINES_GROUND_ASSAULT"
  | "MERCHANT"
  | "MERCHANT_MARINE"
  | "MERCHANT_FREE_TRADER"
  | "MERCHANT_BROKER"
  | "NAVY"
  | "NAVY_CREW"
  | "NAVY_ENGINEERING"
  | "NAVY_FLIGHT"
  | "NOBILITY"
  | "NOBILITY_ADMINISTRATOR"
  | "NOBILITY_DIPLOMAT"
  | "NOBILITY_DILETTANTE"
  | "ROGUE"
  | "ROGUE_THIEF"
  | "ROGUE_ENFORCER"
  | "ROGUE_PIRATE"
  | "SCHOLAR"
  | "SCHOLAR_FIELD_RESEARCHER"
  | "SCHOLAR_SCIENTIST"
  | "SCHOLAR_PHYSICIAN"
  | "SCOUT"
  | "SCOUT_COURIER"
  | "SCOUT_SURVEY"
  | "SCOUT_EXPLORATION";

export type StatModifierObject = {
  stat: StatKeys;
  value: ((currentVal: number) => number) | number;
};

export type CareerBenefitObject = {
  cash?: number;
  characteristic?: StatModifierObject;
  item?: any[];
  option?: any[];
  skill?: { keys: SkillKeys[]; value: number };
};

export type CareerRank = {
  benefit?: CareerBenefitObject;
  title: string;
};

export interface CareerSpecializationObject
  extends DataObject<string, "CAREER"> {
  parentId: number;
  promotion: StatModifierObject;
  ranks: CareerRank[];
  specialistSkills: Array<SkillKeys[]>;
  survival: StatModifierObject;
}

export interface CareerObject extends DataObject<string, "CAREER"> {
  advancedEducation?: { minEdu: number; skills: Array<SkillKeys[]> };
  commission?: StatModifierObject;
  events: string[];
  officerSkills?: Array<SkillKeys[]>;
  officerRank?: CareerRank[];
  mishaps: string[];
  musteringOutBenefits: CareerBenefitObject[];
  personalDevelopment: CareerBenefitObject[];
  serviceSkills: Array<SkillKeys[]>;
  specializations?: { [K in CareerKeys]?: CareerSpecializationObject };
  qualify: {
    skill: StatModifierObject;
    automatic?: boolean;
    agePenalty?: (age: number) => number;
    careerPenalty?: (previousCareers: number) => number;
  };
}

export const CAREER_LIST: { [K in CareerKeys]?: CareerObject } = {
  AGENT,
  ARMY,
  // CITIZEN: {
  //   type: "CAREER",
  //   name: "Citizen",
  //   desc: "",
  //   id: 9,
  //   qty: 0,
  //   qualify: "EDU5",
  //   survival: false,
  //   promotion: false,
  // },
  // CITIZEN_CORPORATE: {
  //   type: "CAREER",
  //   name: "Citizen Corporate",
  //   desc: "",
  //   id: 10,
  //   qty: 0,
  //   qualify: "EDU5",
  //   survival: "SOC6",
  //   promotion: "INT6",
  //   parentId: 9,
  // },
  // CITIZEN_WORKER: {
  //   type: "CAREER",
  //   name: "Citizen Worker",
  //   desc: "",
  //   id: 11,
  //   qty: 0,
  //   qualify: "EDU5",
  //   survival: "END4",
  //   promotion: "EDU8",
  //   parentId: 9,
  // },
  // CITIZEN_COLONIST: {
  //   type: "CAREER",
  //   name: "Citizen Colonist",
  //   desc: "",
  //   id: 12,
  //   qty: 0,
  //   qualify: "EDU5",
  //   survival: "INT7",
  //   promotion: "END5",
  //   parentId: 9,
  // },
  // DRIFTER: {
  //   type: "CAREER",
  //   name: "Drifter",
  //   desc: "",
  //   id: 13,
  //   qty: 0,
  //   qualify: "AUT0",
  //   survival: false,
  //   promotion: false,
  // },
  // DRIFTER_BARBARIAN: {
  //   type: "CAREER",
  //   name: "Drifter Barbarian",
  //   desc: "",
  //   id: 14,
  //   qty: 0,
  //   qualify: "AUT0",
  //   survival: "END7",
  //   promotion: "STR7",
  //   parentId: 13,
  // },
  // DRIFTER_WANDERER: {
  //   type: "CAREER",
  //   name: "Drifter Wanderer",
  //   desc: "",
  //   id: 15,
  //   qty: 0,
  //   qualify: "AUT0",
  //   survival: "END7",
  //   promotion: "INT7",
  //   parentId: 13,
  // },
  // DRIFTER_SCAVENGER: {
  //   type: "CAREER",
  //   name: "Drifter Scavenger",
  //   desc: "",
  //   id: 16,
  //   qty: 0,
  //   qualify: "AUT0",
  //   survival: "DEX7",
  //   promotion: "END7",
  //   parentId: 13,
  // },
  // ENTERTAINER: {
  //   type: "CAREER",
  //   name: "Entertainer",
  //   desc: "",
  //   id: 17,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: false,
  //   promotion: false,
  // },
  // ENTERTAINER_ARTIST: {
  //   type: "CAREER",
  //   name: "Entertainer Artist",
  //   desc: "",
  //   id: 18,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: "SOC6",
  //   promotion: "INT6",
  //   parentId: 17,
  // },
  // ENTERTAINER_JOURNALIST: {
  //   type: "CAREER",
  //   name: "Entertainer Journalist",
  //   desc: "",
  //   id: 19,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: "EDU7",
  //   promotion: "INT5",
  //   parentId: 17,
  // },
  // ENTERTAINER_PERFORMER: {
  //   type: "CAREER",
  //   name: "Entertainer Performer",
  //   desc: "",
  //   id: 20,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: "INT5",
  //   promotion: "DEX7",
  //   parentId: 17,
  // },
  // MARINES: {
  //   type: "CAREER",
  //   name: "Marines",
  //   desc: "",
  //   id: 21,
  //   qty: 0,
  //   qualify: "END6",
  //   survival: false,
  //   promotion: false,
  // },
  // MARINES_SUPPORT: {
  //   type: "CAREER",
  //   name: "Marines Support",
  //   desc: "",
  //   id: 22,
  //   qty: 0,
  //   qualify: "END6",
  //   survival: "END5",
  //   promotion: "EDU7",
  //   parentId: 21,
  // },
  // MARINES_STAR_MARINE: {
  //   type: "CAREER",
  //   name: "Marines Star Marine",
  //   desc: "",
  //   id: 23,
  //   qty: 0,
  //   qualify: "END6",
  //   survival: "END6",
  //   promotion: "EDU6",
  //   parentId: 21,
  // },
  // MARINES_GROUND_ASSAULT: {
  //   type: "CAREER",
  //   name: "Marines Ground Assault",
  //   desc: "",
  //   id: 24,
  //   qty: 0,
  //   qualify: "END6",
  //   survival: "END7",
  //   promotion: "EDU5",
  //   parentId: 21,
  // },
  // MERCHANT: {
  //   type: "CAREER",
  //   name: "Merchant",
  //   desc: "",
  //   id: 25,
  //   qty: 0,
  //   qualify: "INT4",
  //   survival: false,
  //   promotion: false,
  // },
  // MERCHANT_MARINE: {
  //   type: "CAREER",
  //   name: "Merchant Marine",
  //   desc: "",
  //   id: 26,
  //   qty: 0,
  //   qualify: "INT4",
  //   survival: "EDU5",
  //   promotion: "INT7",
  //   parentId: 25,
  // },
  // MERCHANT_FREE_TRADER: {
  //   type: "CAREER",
  //   name: "Merchant Free Trader",
  //   desc: "",
  //   id: 27,
  //   qty: 0,
  //   qualify: "INT4",
  //   survival: "DEX6",
  //   promotion: "INT6",
  //   parentId: 25,
  // },
  // MERCHANT_BROKER: {
  //   type: "CAREER",
  //   name: "Merchant Broker",
  //   desc: "",
  //   id: 28,
  //   qty: 0,
  //   qualify: "INT4",
  //   survival: "EDU5",
  //   promotion: "INT7",
  //   parentId: 25,
  // },
  // NAVY: {
  //   type: "CAREER",
  //   name: "Navy",
  //   desc: "",
  //   id: 29,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: false,
  //   promotion: false,
  // },
  // NAVY_CREW: {
  //   type: "CAREER",
  //   name: "Navy Crew",
  //   desc: "",
  //   id: 30,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: "INT5",
  //   promotion: "EDU7",
  //   parentId: 29,
  // },
  // NAVY_ENGINEERING: {
  //   type: "CAREER",
  //   name: "Navy Engineering",
  //   desc: "",
  //   id: 31,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: "INT6",
  //   promotion: "EDU6",
  //   parentId: 29,
  // },
  // NAVY_FLIGHT: {
  //   type: "CAREER",
  //   name: "Navy Flight",
  //   desc: "",
  //   id: 32,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: "DEX7",
  //   promotion: "EDU5",
  //   parentId: 29,
  // },
  // NOBILITY: {
  //   type: "CAREER",
  //   name: "Nobility",
  //   desc: "",
  //   id: 33,
  //   qty: 0,
  //   qualify: "SOC10",
  //   survival: false,
  //   promotion: false,
  // },
  // NOBILITY_ADMINISTRATOR: {
  //   type: "CAREER",
  //   name: "Nobility Administrator",
  //   desc: "",
  //   id: 34,
  //   qty: 0,
  //   qualify: "SOC10",
  //   survival: "INT4",
  //   promotion: "EDU6",
  //   parentId: 33,
  // },
  // NOBILITY_DIPLOMAT: {
  //   type: "CAREER",
  //   name: "Nobility Diplomat",
  //   desc: "",
  //   id: 35,
  //   qty: 0,
  //   qualify: "SOC10",
  //   survival: "INT5",
  //   promotion: "SOC7",
  //   parentId: 33,
  // },
  // NOBILITY_DILETTANTE: {
  //   type: "CAREER",
  //   name: "Nobility Dilettante",
  //   desc: "",
  //   id: 36,
  //   qty: 0,
  //   qualify: "SOC10",
  //   survival: "SOC3",
  //   promotion: "INT8",
  //   parentId: 33,
  // },
  // ROGUE: {
  //   type: "CAREER",
  //   name: "Rogue",
  //   desc: "",
  //   id: 37,
  //   qty: 0,
  //   qualify: "DEX6",
  //   survival: false,
  //   promotion: false,
  // },
  // ROGUE_THIEF: {
  //   type: "CAREER",
  //   name: "Rogue Thief",
  //   desc: "",
  //   id: 38,
  //   qty: 0,
  //   qualify: "DEX6",
  //   survival: "INT6",
  //   promotion: "DEX6",
  //   parentId: 37,
  // },
  // ROGUE_ENFORCER: {
  //   type: "CAREER",
  //   name: "Rogue Enforcer",
  //   desc: "",
  //   id: 39,
  //   qty: 0,
  //   qualify: "DEX6",
  //   survival: "END6",
  //   promotion: "STR6",
  //   parentId: 37,
  // },
  // ROGUE_PIRATE: {
  //   type: "CAREER",
  //   name: "Rogue Pirate",
  //   desc: "",
  //   id: 40,
  //   qty: 0,
  //   qualify: "DEX6",
  //   survival: "DEX6",
  //   promotion: "INT6",
  //   parentId: 37,
  // },
  // SCHOLAR: {
  //   type: "CAREER",
  //   name: "Scholar",
  //   desc: "",
  //   id: 41,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: false,
  //   promotion: false,
  // },
  // SCHOLAR_FIELD_RESEARCHER: {
  //   type: "CAREER",
  //   name: "Scholar Field Researcher",
  //   desc: "",
  //   id: 42,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: "END6",
  //   promotion: "INT6",
  //   parentId: 41,
  // },
  // SCHOLAR_SCIENTIST: {
  //   type: "CAREER",
  //   name: "Scholar Scientist",
  //   desc: "",
  //   id: 43,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: "EDU4",
  //   promotion: "INT8",
  //   parentId: 41,
  // },
  // SCHOLAR_PHYSICIAN: {
  //   type: "CAREER",
  //   name: "Scholar Physician",
  //   desc: "",
  //   id: 44,
  //   qty: 0,
  //   qualify: "INT6",
  //   survival: "EDU4",
  //   promotion: "EDU8",
  //   parentId: 41,
  // },
  // SCOUT: {
  //   type: "CAREER",
  //   name: "Scout",
  //   desc: "",
  //   id: 45,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: false,
  //   promotion: false,
  // },
  // SCOUT_COURIER: {
  //   type: "CAREER",
  //   name: "Scout Courier",
  //   desc: "",
  //   id: 46,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: "END5",
  //   promotion: "EDU9",
  //   parentId: 45,
  // },
  // SCOUT_SURVEY: {
  //   type: "CAREER",
  //   name: "Scout Survey",
  //   desc: "",
  //   id: 47,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: "END6",
  //   promotion: "INT8",
  //   parentId: 45,
  // },
  // SCOUT_EXPLORATION: {
  //   type: "CAREER",
  //   name: "Scout Exploration",
  //   desc: "",
  //   id: 48,
  //   qty: 0,
  //   qualify: "INT5",
  //   survival: "END7",
  //   promotion: "EDU7",
  //   parentId: 45,
  // },
};
