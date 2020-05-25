import { AppState } from "../";
export const formInitialState: AppState.FormState = {
  characterNameForm: {},
  statRollForm: {},
};

const FormReducer = (
  state = formInitialState,
  action: {
    type: string;
    formName: AppState.FormNames;
    fieldName: string;
    fieldValue: string | number;
  }
) => {
  switch (action.type) {
    case "UPDATE_FORM":
      const activeForm = state[action.formName];
      activeForm[action.fieldName] = action.fieldValue;
      return Object.assign({}, state, { [action.formName]: activeForm });
    default:
      return state;
  }
};

export default FormReducer;
