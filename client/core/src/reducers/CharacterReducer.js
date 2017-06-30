import { SKILL_LIST } from "constants/Skills";
import StatsService from "services/StatsService";
const getModifier = StatsService.getModifier;

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHARACTER_RESTART':
      return _.assign({}, state, initialState);
    case 'CHARACTER_SAVE':
      /*interact with db or something - generate a tiny url?*/
      return state;
    case 'INCREMENT_SKILL':
      var iSkill = _.assign({}, state.skills);
      if(iSkill[action.data]) {
        iSkill[action.data].qty = isNaN(iSkill[action.data].qty) ? 1 : iSkill[action.data].qty += 1;
      } else {
        if(SKILL_LIST[action.data]) {
          iSkill[action.data] = SKILL_LIST[action.data];
          iSkill[action.data].qty = 1;
        } else {
          console.warn('Cannot increment: Invalid skill type');
        }
      }
      return _.assign(
        {},
        state,
        {skills: iSkill}
      );
    case 'DECREMENT_SKILL':
      var dSkill = _.assign({}, state.skills);
      if(dSkill[action.data]) {
        if(isNaN(dSkill[action.data].qty) || dSkill[action.data].qty === 0){
          dSkill[action.data].qty = 0;
        } else {
          dSkill[action.data].qty = dSkill[action.data].qty -= 1;
        }
      } else {
        console.warn('Cannot decrement: Invalid skill type');
      }
      return _.assign(
        {},
        state,
        {skills: dSkill}
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
    case 'SET_BACKGROUND_SKILL_COUNT':
      return _.assign({}, state, { backgroundSkillCount: action.data });
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

const initialState = {
  name: false,
  age: 0,
  sex: 0,
  stats: false,
  homeworld: false,
  backgroundSkillCount: 1,
  skills: {},
  careers: {},
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
