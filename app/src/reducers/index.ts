import { combineReducers } from "redux";
import CharacterReducer from "./CharacterReducer";
import FormReducer from "./FormReducer";

const TravellerApp = combineReducers({
  characterCreation: CharacterReducer,
  forms: FormReducer,
});

export default TravellerApp;
