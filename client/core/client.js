global.React = require('react');

import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import travellerApp from 'reducers';
import * as actionCreators from 'actions';
import App from 'components/App';

let store = createStore(travellerApp);

const mapStateToProps = state => {
  return {
    character: travellerApp
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    actions: actionCreators
  }
};

const AppWithData = connect( travellerApp, mapDispatchToProps )(App);

render(
  <Provider store={store}>
    <AppWithData />
  </Provider>,
  document.getElementById('app')
);
