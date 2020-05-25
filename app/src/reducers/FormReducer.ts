import { AppState } from "../";
export const formInitialState: AppState.FormState = {
  characterNameForm: {},
  statRollForm: {},
};

const FormReducer = (
  state = formInitialState,
  action: {
    type: string;
    formName: "characterNameForm" | "statRollForm";
    field: string;
    value: string | number;
  }
) => {
  switch (action.type) {
    case "UPDATE_FORM":
      let formName = formInitialState[action.formName];
      formName[action.field] = action.value;
      return Object.assign({}, state, { [action.formName]: formName });
    default:
      return state;
  }
};

export default FormReducer;
