import React from "react";

export const StateContext = React.createContext({
  actions: {},
  characterCreation: {},
  dispatch: undefined,
  form: {},
});

function App({ characterCreation, form, actions, dispatch }: AppProps) {
  return (
    <StateContext.Provider
      value={{ actions, dispatch, characterCreation, form }}
    >
      <div className="app"></div>
    </StateContext.Provider>
  );
}

export interface AppProps {
  characterCreation: any;
  form: any;
  actions: any;
  dispatch: any;
}

export default App;
