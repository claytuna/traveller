import { AppState } from "../";
import { WorldGeneratorObject } from "../services";
import { SkillKeys } from "../constants";

export const appRestart = () => ({ type: "CHARACTER_RESTART" });
export const appSave = () => ({ type: "CHARACTER_SAVE" });

export const updateCharacterName = (name: string) => ({
  type: "UPDATE_NAME",
  name,
});
export const updateCharacterStats = (statsArray: number[]) => ({
  type: "UPDATE_STATS",
  statsArray,
});
export const setAvailableSkillCount = (availableSkillCount: number) => ({
  type: "SET_AVAILABLE_SKILL_COUNT",
  availableSkillCount,
});
export const updateHomeworld = (homeWorld: WorldGeneratorObject) => ({
  type: "UPDATE_HOMEWORLD",
  homeWorld,
});
export const incrementSkill = (skillKey: SkillKeys) => ({
  type: "INCREMENT_SKILL",
  skillKey,
});
export const decrementSkill = (skillKey: SkillKeys) => ({
  type: "DECREMENT_SKILL",
  skillKey,
});

export const updateForm = (
  formName: AppState.FormNames,
  fieldName: string,
  fieldValue: string | number
) => {
  return {
    type: "UPDATE_FORM",
    formName,
    fieldName,
    fieldValue,
  };
};

export const goToStep = (step: string) => {
  return {
    type: "GO_TO_STEP",
    step,
  };
};
