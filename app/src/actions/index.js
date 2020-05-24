export const appRestart = () => ({ type: "CHARACTER_RESTART" });
export const appSave = () => ({ type: "CHARACTER_SAVE" });

export const updateCharacterName = (name) => ({
  type: "UPDATE_NAME",
  name,
});
export const updateCharacterStats = (statsArray) => ({
  type: "UPDATE_STATS",
  statsArray,
});
export const setBackgroundSkillCount = (count) => ({
  type: "SET_BACKGROUND_SKILL_COUNT",
  count,
});
export const updateHomeworld = (homeWorld) => ({
  type: "UPDATE_HOMEWORLD",
  homeWorld,
});
export const incrementSkill = (skillKey) => ({
  type: "INCREMENT_SKILL",
  skillKey,
});
export const decrementSkill = (skillKey) => ({
  type: "DECREMENT_SKILL",
  skillKey,
});

export const updateForm = (formName, fieldName, fieldValue) => {
  return {
    type: "UPDATE_FORM",
    formName,
    fieldName,
    fieldValue,
  };
};
