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
