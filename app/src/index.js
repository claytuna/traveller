import React from "react";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import travellerApp from "./reducers";
import * as actionCreators from "./actions";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let store = createStore(travellerApp);

// const mapStateToProps = (state) => {
//   return {
//     character: travellerApp,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    actions: actionCreators,
  };
};

const AppWithData = connect(travellerApp, mapDispatchToProps)(App);

render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithData />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
