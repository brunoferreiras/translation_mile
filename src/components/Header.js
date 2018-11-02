import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default props => {
  return (
    <Header
      statusBarProps={{ barStyle: 'light-content' }}
      leftComponent={{ icon: props.leftIcon, color: '#fff' }}
      centerComponent={{
        text: props.title,
        style: styles.title
      }}
      rightComponent={{ icon: props.rightIcon, color: '#fff' }}
      outerContainerStyles={styles.background}
      innerContainerStyles={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#8CB13E'
  },
  container: {
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontSize: 20
  }
});
