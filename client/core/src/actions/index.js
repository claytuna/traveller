export const appRestart = () => ({type: 'CHARACTER_RESTART'});
export const appSave = () => ({type: 'CHARACTER_SAVE'});

export const updateCharacterName = name => {
  return {
    type: 'UPDATE_NAME',
    data: name
  }
};

export const updateCharacterStats = arr => {
  return {
    type: 'UPDATE_STATS',
    data: arr
  }
};

export const updateHomeworld = worldObj => {
  return {
    type: 'UPDATE_HOMEWORLD',
    data: worldObj
  }
};

export const updateForm = (formName, fieldName, fieldValue) => {
  return {
    type: 'UPDATE_FORM',
    form: formName,
    field: fieldName,
    value: fieldValue
  }
};
