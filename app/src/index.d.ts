import {
  SkillObject,
  CareerObject,
  SkillKeys,
  StatKeyObject,
  StatKeys,
  WorldGeneratorObject,
} from "./constants";

export interface DataObject<N = string, T = string> {
  name: N;
  id: number;
  parentId?: number;
  desc: string;
  type: T;
  qty?: number;
}

export type GenericObject = { [keyof: string]: unknown };

declare namespace AppState {
  interface FormState {
    characterNameForm: { [keyof: string]: string | number };
    statRollForm: { [keyof: string]: string | number };
  }
  type FormNames = keyof FormState;
  interface CharacterState {
    step: string;
    name?: string;
    age: number;
    sex?: number;
    stats?: { [key in StatKeys]: StatKeyObject };
    hasBeenDrafted: boolean;
    homeworld?: WorldGeneratorObject;
    availableSkillCount?: number;
    activeCareer?: CareerObject;
    skills: { [key in SkillKeys]?: SkillObject };
    careers?: CareerObject[];
    events?: GenericObject[];
    connections?: {
      allies?: GenericObject[];
      contacts?: GenericObject[];
      enemies?: GenericObject[];
      rivals?: GenericObject[];
    };
    benefits?: GenericObject[];
    finances?: {
      pension: number;
      debt: number;
      cash: number;
      expenses: number;
    };
    equipment?: GenericObject[];
    weapons?: GenericObject[];
    armor?: {
      type?: string;
      rating: number;
    };
    vehicles?: GenericObject[];
    spacecraft?: GenericObject[];
  }
}
