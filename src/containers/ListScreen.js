import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

class ListScreen extends Component {
  render() {
    return (
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
    );
  }
}

export default ListScreen;
