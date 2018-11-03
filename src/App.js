import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadModal from './components/LoadModal';
import ListScreen from './containers/ListScreen';
import configureStore from './store/configureStore';

const { store, persistor } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadModal legend={'Aguarde'} show={true} />} persistor={persistor}>
          <ListScreen />
        </PersistGate>
      </Provider>
    );
  }
}
