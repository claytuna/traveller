import React, { useState } from "react";
import { Button, Datum } from "./components/ui";
import "./App.css";

export const StateContext = React.createContext({
  actions: {},
  character: {},
  dispatch: undefined,
  form: {},
});

function App({ character, form, actions, dispatch }: AppProps) {
  const [value, setValue] = useState(9);
  return (
    <StateContext.Provider value={{ actions, dispatch, character, form }}>
      <div className="App">
        <header className="App-header">
          <Button onClick={() => setValue(12)}>Update</Button>
          <Datum value={value} isCountable />
        </header>
      </div>
    </StateContext.Provider>
  );
}

export interface AppProps {
  character: any;
  form: any;
  actions: any;
  dispatch: any;
}

export default App;
