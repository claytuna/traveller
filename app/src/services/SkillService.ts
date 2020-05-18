import filter from "lodash/filter";
import { SKILL_LIST, EDUCATION_SKILLS } from "../constants/Skills";
import { SkillObject } from "..";

export const SkillService = {
  list: () => {
    return SKILL_LIST;
  },

  getBackgroundSkills: (tradeCodes: string[]) => {
    const S = SKILL_LIST;
    const tradeSkillMap: { [keyof: string]: object | null } = {
      Ag: { ANIMALS: S.ANIMALS },
      As: { ZERO_G: S.ZERO_G },
      Ba: null,
      De: { SURVIVAL: S.SURVIVAL },
      Fl: { SEAFARER: S.SEAFARER },
      Ga: { ANIMALS: S.ANIMALS },
      Hi: { STREETWISE: S.STREETWISE },
      Ht: { COMPUTERS: S.COMPUTERS },
      IC: { VACC_SUIT: S.VACC_SUIT },
      In: { TRADE: S.TRADE },
      Lo: null,
      Lt: { SURVIVAL: S.SURVIVAL },
      Na: { ANIMALS: S.ANIMALS },
      Ni: null,
      Po: { ANIMALS: S.ANIMALS },
      Ri: { CAROUSE: S.CAROUSE },
      Wa: { SEAFARER: S.SEAFARER },
      Va: { VACC_SUIT: S.VACC_SUIT },
    };

    let obj = {};
    tradeCodes.map((codeString) => {
      if (tradeSkillMap[codeString]) {
        obj = Object.assign({}, obj, tradeSkillMap[codeString]);
      }
    });

    return { worldSkills: obj, educationSkills: EDUCATION_SKILLS };
  },

  findSkill: (skillName: string): SkillObject => {
    return filter(SKILL_LIST, (obj: SkillObject) => obj.name === skillName)[0];
  },
};
