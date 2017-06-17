import { combineReducers } from 'redux';
import CharacterReducer from './CharacterReducer';
import FormReducer from './FormReducer';

const travellerApp = combineReducers({
  character: CharacterReducer,
  forms: FormReducer
})

export default travellerApp
