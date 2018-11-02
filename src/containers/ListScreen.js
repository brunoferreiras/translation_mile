import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { loadResources } from '../actions/resource';
import Header from '../components/Header';

class ListScreen extends Component {
  render() {
    return (
      <View>
        <Header title="Translations Mile" leftIcon="menu" rightIcon="home" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resource.resources
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(loadResources())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);
