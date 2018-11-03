import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { filterContains } from '../utils/filters';

class FormSearch extends Component {
  render() {
    console.log('Form Search: ', this.props.resources);
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={word =>
            console.log('word: ', filterContains(word, this.props.resources))
          }
          onClearText={() => console.log('clear text')}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Contém..."
        />
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSearch);
