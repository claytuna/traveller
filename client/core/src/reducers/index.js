import { combineReducers } from 'redux';
import CharacterReducer from './CharacterReducer';

const travellerApp = combineReducers({
  character: CharacterReducer
})

export default travellerApp
