const initialState: {
  characterNameForm: { [keyof: string]: unknown };
  statRollForm: { [keyof: string]: unknown };
} = {
  characterNameForm: {},
  statRollForm: {},
};

const FormReducer = (
  state = initialState,
  action: {
    type: string;
    form: "characterNameForm" | "statRollForm";
    field: string;
    value: unknown;
  }
) => {
  switch (action.type) {
    case "UPDATE_FORM":
      let form = initialState[action.form];
      form[action.field] = action.value;
      return Object.assign({}, state, { [action.form]: form });
    default:
      return state;
  }
};

export default FormReducer;
