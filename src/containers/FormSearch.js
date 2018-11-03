import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { filterContains } from '../actions/filter';
import Select from '../components/Select';

class FormSearch extends Component {
  render() {
    return (
      <View>
        <Select
          labelDefault="Todas as linguagens"
          items={this.props.languages}
        />
        <Select labelDefault="Todos os módulos" items={this.props.modules} />
        <SearchBar
          lightTheme
          onChangeText={word => this.props.filterContains(word)}
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
    resources: state.resource.resources,
    languages: state.resource.languages,
    modules: state.resource.modules
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterContains: word => dispatch(filterContains(word))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSearch);
