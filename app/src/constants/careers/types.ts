import { DataObject } from "../..";
import { StatKeys } from "../characteristics";
import { SkillKeys } from "../skills";
import { ItemKeys } from "../items";

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
  characteristic?: StatModifierObject | StatModifierObject[];
  item?: ItemKeys[];
  option?: any[];
  skill?: { keys: SkillKeys[]; desc?: string; value: number };
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

export interface EventObject {
  desc: string;
  action?: string;
}

export interface CareerObject extends DataObject<string, "CAREER"> {
  advancedEducation?: { minEdu: number; skills: Array<SkillKeys[]> };
  commission?: StatModifierObject;
  events: EventObject[];
  officerSkills?: Array<SkillKeys[]>;
  officerRank?: CareerRank[];
  mishaps: EventObject[];
  musteringOutBenefits: CareerBenefitObject[];
  personalDevelopment: CareerBenefitObject[];
  serviceSkills: Array<SkillKeys[]>;
  specializations?: { [K in CareerKeys]?: CareerSpecializationObject };
  qualify: {
    skill?: StatModifierObject;
    agePenalty?: (age: number) => number;
    careerPenalty?: (previousCareers: number) => number;
    autoQualify?: boolean;
  };
}
