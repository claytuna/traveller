import filter from "lodash/filter";
import {
  SKILL_LIST,
  EDUCATION_SKILLS,
  TradeCodeObject,
  TradeCodeKeys,
  SkillObject,
  SkillKeys,
} from "../constants";

export const SkillService = {
  list: () => {
    return SKILL_LIST;
  },

  getBackgroundSkills: (
    tradeCodes: TradeCodeKeys[]
  ): {
    worldSkills: { [key in SkillKeys]: SkillObject } | undefined;
    educationSkills: { [key in SkillKeys]?: SkillObject };
  } => {
    const S = SKILL_LIST;
    const tradeSkillMap: { [key in TradeCodeKeys]: object | null } = {
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

    let obj: { [key in SkillKeys]: TradeCodeObject } | undefined = undefined;
    tradeCodes.forEach((codeString) => {
      if (tradeSkillMap[codeString]) {
        obj = Object.assign({}, obj, tradeSkillMap[codeString]);
      }
    });

    return { worldSkills: obj, educationSkills: EDUCATION_SKILLS };
  },

  findSkill: (skillName: string): SkillObject => {
    return filter(SKILL_LIST, (obj: SkillObject) => obj.name === skillName)[0];
  },

  getSubSkillObjects: (skillName: SkillKeys): SkillObject[] => {
    return filter(
      SKILL_LIST,
      (obj: SkillObject) => obj.parentId === SKILL_LIST[skillName].parentId
    );
  },

  getSubSkillKeys: (skillName: SkillKeys): SkillKeys[] => {
    const keyArr: SkillKeys[] = [];
    if (!SKILL_LIST) {
      return [skillName];
    }
    const parentId = SKILL_LIST[skillName].parentId;
    (Object.keys(SKILL_LIST) as SkillKeys[]).forEach((keyName) => {
      if (parentId === SKILL_LIST[keyName].parentId) {
        keyArr.push(keyName);
      }
    });
    return keyArr;
  },
};
