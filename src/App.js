import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ListScreen from './containers/ListScreen';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListScreen />
      </Provider>
    );
  }
}
