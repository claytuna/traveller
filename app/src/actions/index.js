export const appRestart = () => ({ type: "CHARACTER_RESTART" });
export const appSave = () => ({ type: "CHARACTER_SAVE" });

export const updateCharacterName = (name) => ({
  type: "UPDATE_NAME",
  data: name,
});
export const updateCharacterStats = (arr) => ({
  type: "UPDATE_STATS",
  data: arr,
});
export const setBackgroundSkillCount = (count) => ({
  type: "SET_BACKGROUND_SKILL_COUNT",
  data: count,
});
export const updateHomeworld = (worldObj) => ({
  type: "UPDATE_HOMEWORLD",
  data: worldObj,
});
export const incrementSkill = (skillKey) => ({
  type: "INCREMENT_SKILL",
  data: skillKey,
});
export const decrementSkill = (skillKey) => ({
  type: "DECREMENT_SKILL",
  data: skillKey,
});

export const updateForm = (formName, fieldName, fieldValue) => {
  return {
    type: "UPDATE_FORM",
    form: formName,
    field: fieldName,
    value: fieldValue,
  };
};
