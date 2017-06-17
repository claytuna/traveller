const career = (isFirst) => {
  return {
    name:'foo',
    isFirst: isFirst,
    basicTraining: {},
    availableSkills: [],
    specialization: false
  };
}

const initialState = {
  name: false,
  age:0,
  stats: false,
  homeworld: false,
  skills: {
    background: [],
    basicTraining: [],
    general: []
  },
  careers: [],
  events: [],
  connections: [],
  benefits: [],
  equipment: [],
  vehicles: [],
  spacecraft: []
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return _.assign(
        {},
        state,
        {name: action.data}
      );
    case 'UPDATE_STATS':
      return _.assign(
          {},
          state,
          {stats: {
            STR:{value:action.data[0]},
            DEX:{value:action.data[1]},
            END:{value:action.data[2]},
            INT:{value:action.data[3]},
            EDU:{value:action.data[4]},
            SOC:{value:action.data[5]}
          }}
      );
    case 'UPDATE_HOMEWORLD':
      return _.assign(
        {},
        state,
        {homeworld: action.data}
      );
    default:
      return state;
  }
};

export default CharacterReducer;
