import { SKILL_LIST, SkillKeys } from "../constants";
import * as STEPS from "../constants/characterCreationSteps";
import { WorldGeneratorObject, StatsService } from "../services";
import { AppState } from "../";

const getModifier = StatsService.getModifier;

const CharacterReducer = (
  state = characterInitialState,
  action: {
    type: string;
    step: string;
    availableSkillCount?: number;
    skillKey?: SkillKeys;
    statsArray?: number[];
    name?: string;
    homeWorld?: WorldGeneratorObject;
  }
) => {
  switch (action.type) {
    case "CHARACTER_RESTART":
      return Object.assign({}, state, characterInitialState);
    case "CHARACTER_SAVE":
      /*interact with db or something - generate a tiny url?*/
      return state;
    case "INCREMENT_SKILL":
      const iSkill = Object.assign({}, state.skills);
      let foundIncSkill = action.skillKey ? iSkill[action.skillKey] : undefined;
      if (action.skillKey === undefined) {
        console.warn("Cannot increment: Invalid skill type");
        return Object.assign({}, state, { skills: iSkill });
      }
      if (foundIncSkill !== undefined && foundIncSkill.qty !== undefined) {
        foundIncSkill.qty =
          isNaN(foundIncSkill.qty) || foundIncSkill.qty === 0
            ? 1
            : (foundIncSkill.qty += 1);
      }
      if (foundIncSkill === undefined && SKILL_LIST[action.skillKey]) {
        foundIncSkill = SKILL_LIST[action.skillKey];
        foundIncSkill.qty = 1;
      }
      const stateSkills = state.skills;
      stateSkills[action.skillKey] = foundIncSkill;
      return Object.assign({}, state, {
        skills: stateSkills,
      });
    case "DECREMENT_SKILL":
      const dSkill = Object.assign({}, state.skills);
      let foundDecSkill = action.skillKey ? dSkill[action.skillKey] : undefined;
      if (foundDecSkill && foundDecSkill.qty) {
        if (isNaN(foundDecSkill.qty) || foundDecSkill.qty === 0) {
          foundDecSkill.qty = 0;
        } else {
          foundDecSkill.qty = foundDecSkill.qty -= 1;
        }
      } else {
        console.warn("Cannot decrement: Invalid skill type");
      }
      return Object.assign({}, state, {
        skills: { ...state.skills, foundDecSkill },
      });
    case "UPDATE_NAME":
      return Object.assign({}, state, { name: action.name });
    case "NEXT_STEP":
      return Object.assign({}, state, { step: action.step });
    case "UPDATE_STATS":
      let statVals = action.statsArray;
      return (
        statVals &&
        Object.assign({}, state, {
          stats: {
            STR: { value: statVals[0], modifier: getModifier(statVals[0]) },
            DEX: { value: statVals[1], modifier: getModifier(statVals[1]) },
            END: { value: statVals[2], modifier: getModifier(statVals[2]) },
            INT: { value: statVals[3], modifier: getModifier(statVals[3]) },
            EDU: { value: statVals[4], modifier: getModifier(statVals[4]) },
            SOC: { value: statVals[5], modifier: getModifier(statVals[5]) },
          },
        })
      );
    case "SET_AVAILABLE_SKILL_COUNT":
      return Object.assign({}, state, {
        availableSkillCount: action.availableSkillCount,
      });
    case "UPDATE_HOMEWORLD":
      return Object.assign({}, state, { homeworld: action.homeWorld });
    case "GO_TO_STEP":
      return Object.assign({}, state, { step: action.step });
    default:
      return state;
  }
};

export default CharacterReducer;

export const characterInitialState: AppState.CharacterState = {
  step: STEPS.CHOOSE_HOMEWORLD,
  name: undefined,
  age: 18,
  sex: 0,
  stats: {
    STR: {
      value: 8,
      modifier: 0,
    },
    DEX: {
      value: 9,
      modifier: 1,
    },
    END: {
      value: 4,
      modifier: -1,
    },
    INT: {
      value: 8,
      modifier: 0,
    },
    EDU: {
      value: 7,
      modifier: 0,
    },
    SOC: {
      value: 5,
      modifier: -1,
    },
  },
  homeworld: undefined,
  availableSkillCount: 3,
  skills: {},
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
