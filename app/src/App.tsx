import React from "react";
import { ThemeProvider } from "styled-components";
import { AppState } from "./";
import { theme } from "./theme";
import {
  Button,
  ButtonGroup,
  Header,
  CharacterCreation,
  CharacterSummary,
} from "./components";
import { characterInitialState } from "./reducers/CharacterReducer";
import { formInitialState } from "./reducers/FormReducer";

import * as Styled from "./App.styled";
import "./css/reset.css";

interface AppContextInterface {
  actions: any;
  characterCreation: AppState.CharacterState;
  dispatch: any;
  forms: AppState.FormState;
}

export const StateContext = React.createContext<AppContextInterface>({
  actions: undefined,
  characterCreation: characterInitialState,
  dispatch: undefined,
  forms: formInitialState,
});

function App({ characterCreation, forms, actions, dispatch }: AppProps) {
  return (
    <StateContext.Provider
      value={{ actions, dispatch, characterCreation, forms }}
    >
      <ThemeProvider theme={theme}>
        <Styled.App data-testid="App">
          <Header title="Traveller Character Generator">
            <ButtonGroup justifyContent="flex-end">
              <Button
                priority="secondary"
                onClick={() => dispatch(actions.appRestart())}
              >
                Restart
              </Button>
              <Button
                priority="tertiary"
                onClick={() => dispatch(actions.appSave())}
                disabled
              >
                Save
              </Button>
            </ButtonGroup>
          </Header>
          <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
            <CharacterCreation />
            <div
              style={{
                display: "flex",
                flexGrow: 1,
                minWidth: "160px",
                maxWidth: "200px",
              }}
            >
              <CharacterSummary />
            </div>
          </div>
        </Styled.App>
      </ThemeProvider>
    </StateContext.Provider>
  );
}

export interface AppProps {
  characterCreation: AppState.CharacterState;
  forms: AppState.FormState;
  actions: any;
  dispatch: any;
}

export default App;
