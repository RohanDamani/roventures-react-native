import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers/index';
import Main from './src/Main';
import thunkMiddleware from "redux-thunk";

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
);
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('./src/reducers');
    store.replaceReducer(nextRootReducer);
  });
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
