import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header
            statusBarProps={{}}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{
              text: 'Translation Mile',
              style: { color: '#fff', fontSize: 20 }
            }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            outerContainerStyles={{ backgroundColor: '#8CB13E' }}
            innerContainerStyles={{ justifyContent: 'space-between' }}
          />
        </View>
      </Provider>
    );
  }
}
