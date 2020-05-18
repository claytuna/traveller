export type SkillObject = {
  name: string;
  desc: string;
  id: number;
  qty?: number;
  parentId?: number;
};

export type CareerObject = {
  name: string;
  desc: string;
  id: number;
  qty: number;
  qualify: string;
  survival: boolean | string;
  promotion: boolean | string;
  parentId?: number;
};

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
