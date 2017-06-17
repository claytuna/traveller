const career = (isFirst) => {
  return {
    name:'foo',
    isFirst: isFirst,
    basicTraining: {},
    availableSkills: [],
    specialization: false
  };
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHARACTER_RESTART':
      return _.assign({}, state, initialState);
    case 'CHARACTER_SAVE':
      /*interact with db or something - generate a tiny url?*/
      return state;
    case 'UPDATE_SKILL':
      let newSkills = state.skills.push(action.data)
      return _.assign(
        {},
        state,
        {skills: newSkills}
      );
    case 'UPDATE_NAME':
      return _.assign(
        {},
        state,
        {name: action.data}
      );
    case 'UPDATE_STATS':
      let statVals = action.data;
      return _.assign(
          {},
          state,
          {stats: {
            STR:{value:statVals[0], modifier:getModifier(statVals[0])},
    				DEX:{value:statVals[1], modifier:getModifier(statVals[1])},
    				END:{value:statVals[2], modifier:getModifier(statVals[2])},
    				INT:{value:statVals[3], modifier:getModifier(statVals[3])},
    				EDU:{value:statVals[4], modifier:getModifier(statVals[4])},
    				SOC:{value:statVals[5], modifier:getModifier(statVals[5])},
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

function getModifier(stat){
  if(stat === 0) return -3;
  if(stat <= 2) return -2;
  if(stat <= 5) return -1;
  if(stat <= 8) return 0;
  if(stat <= 11) return 1;
  if(stat <= 14) return 2;
  if(stat <= 15) return 3;
};

const initialState = {
  name: false,
  age: 0,
  sex: 0,
  stats: false,
  homeworld: false,
  backgroundSkills: [],
  skills: [],
  careers: [],
  events: [],
  connections: {
    allies:[],
    contacts:[],
    enemies:[],
    rivals:[]
  },
  benefits: [],
  finances: {
    pension:0,
    debt:0,
    cash:0,
    expenses:0
  },
  equipment: [],
  weapons: [],
  armor: {
    type:false,
    rating:0
  },
  vehicles: [],
  spacecraft: []
};
