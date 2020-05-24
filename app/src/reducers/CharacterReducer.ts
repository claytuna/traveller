import { SKILL_LIST, SkillKeys } from "../constants";
import { WorldGeneratorObject } from "../services";
import { AppState } from "../";

const CharacterReducer = (
  state = initialState,
  action: {
    type: string;
    backgroundSkillCount?: number;
    skillKey?: SkillKeys;
    name?: string;
    homeWorld?: WorldGeneratorObject;
  }
) => {
  switch (action.type) {
    case "CHARACTER_RESTART":
      return Object.assign({}, state, initialState);
    case "CHARACTER_SAVE":
      /*interact with db or something - generate a tiny url?*/
      return state;
    case "INCREMENT_SKILL":
      const iSkill = Object.assign({}, state.skills);
      let foundIncSkill = action.skillKey ? iSkill[action.skillKey] : undefined;
      if (action.skillKey === undefined || !foundIncSkill) {
        console.warn("Cannot increment: Invalid skill type");
        return Object.assign({}, state, { skills: iSkill });
      }
      if (foundIncSkill !== undefined && foundIncSkill.qty) {
        foundIncSkill.qty = isNaN(foundIncSkill.qty)
          ? 1
          : (foundIncSkill.qty += 1);
      } else {
        if (SKILL_LIST[action.skillKey]) {
          foundIncSkill = SKILL_LIST[action.skillKey];
          foundIncSkill.qty = 1;
        }
      }
      console.warn("Cannot increment: Invalid skill type");
      return Object.assign({}, state, { skills: iSkill });
    case "DECREMENT_SKILL":
      const dSkill = Object.assign({}, state.skills);
      let foundSkill = action.skillKey ? dSkill[action.skillKey] : undefined;
      if (foundSkill && foundSkill.qty) {
        if (isNaN(foundSkill.qty) || foundSkill.qty === 0) {
          foundSkill.qty = 0;
        } else {
          foundSkill.qty = foundSkill.qty -= 1;
        }
      } else {
        console.warn("Cannot decrement: Invalid skill type");
      }
      return Object.assign({}, state, { skills: dSkill });
    case "UPDATE_NAME":
      return Object.assign({}, state, { name: action.name });
    // case "UPDATE_STATS":
    //   let statVals = action.data;
    //   return Object.assign({}, state, {
    //     stats: {
    //       STR: { value: statVals[0], modifier: getModifier(statVals[0]) },
    //       DEX: { value: statVals[1], modifier: getModifier(statVals[1]) },
    //       END: { value: statVals[2], modifier: getModifier(statVals[2]) },
    //       INT: { value: statVals[3], modifier: getModifier(statVals[3]) },
    //       EDU: { value: statVals[4], modifier: getModifier(statVals[4]) },
    //       SOC: { value: statVals[5], modifier: getModifier(statVals[5]) },
    //     },
    //   });
    case "SET_BACKGROUND_SKILL_COUNT":
      return Object.assign({}, state, {
        backgroundSkillCount: action.backgroundSkillCount,
      });
    case "UPDATE_HOMEWORLD":
      return Object.assign({}, state, { homeworld: action.homeWorld });
    default:
      return state;
  }
};

export default CharacterReducer;

const initialState: AppState.CharacterState = {
  name: undefined,
  age: 18,
  sex: 0,
  stats: undefined,
  homeworld: undefined,
  backgroundSkillCount: 1,
  skills: undefined,
  careers: undefined,
  events: [],
  connections: {
    allies: [],
    contacts: [],
    enemies: [],
    rivals: [],
  },
  benefits: [],
  finances: {
    pension: 0,
    debt: 0,
    cash: 0,
    expenses: 0,
  },
  equipment: [],
  weapons: [],
  armor: {
    type: undefined,
    rating: 0,
  },
  vehicles: [],
  spacecraft: [],
};
