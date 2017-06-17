const initialState = {
  characterNameForm: {},
  statRollForm:{}
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      let form = initialState[action.form];
      if(form) form[action.field] = action.value;
      return _.assign(
        {},
        state,
        {[action.form]: form}
      );
      default:
        return state;
    }
  };

  export default FormReducer;
