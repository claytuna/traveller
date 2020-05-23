export type SkillObject = DataObject<string, string, undefined>;

export interface CareerObject extends DataObject<string, "CAREER", undefined> {
  qualify: string;
  survival: boolean | string;
  promotion: boolean | string;
}

export interface DataObject<N = string, T = string, V = {}> {
  name: N;
  id: number;
  parentId?: number;
  desc: string;
  type: T;
  values?: V;
  qty?: number;
}

export type GenericObject = { [keyof: string]: unknown };

declare namespace AppState {
  interface CharacterState {
    name?: string;
    age?: number;
    sex?: number;
    stats?: {}[];
    homeworld?: {}[];
    backgroundSkillCount?: number;
    skills?: SkillObject[];
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
