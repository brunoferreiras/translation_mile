import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ButtonGroup, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { filterByLanguage, filterByModule, filterContains } from '../actions/filter';
import Select from '../components/Select';
const { width: DEVICE_HEIGHT } = Dimensions.get('window');

class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
      loadIcon: false
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Linguagens', 'Módulos', 'Contém'];
    const { selectedIndex } = this.state;
    return (
      <View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={styles.containerButtons}
        />
        {this.state.selectedIndex === 0 && (
          <Select
            labelDefault="Todas as linguagens"
            items={this.props.languages}
            onSelected={this.props.filterByLanguage}
          />
        )}

        {this.state.selectedIndex === 1 && (
          <Select
            labelDefault="Todos os módulos"
            items={this.props.modules}
            onSelected={this.props.filterByModule}
          />
        )}
        {this.state.selectedIndex === 2 && (
          <SearchBar
            showLoading
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerSearch}
            onChangeText={word => {
              this.setState({ loadIcon: true }, () =>
                this.props.filterContains(word)
              );
            }}
            onClearText={() => this.setState({ loadIcon: false })}
            showLoadingIcon={this.state.loadIcon}
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder="Contém..."
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerButtons: {
    flex: 1
  },
  containerSearch: {
    height: DEVICE_HEIGHT * 0.125,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    borderColor: '#8CB13E',
    elevation: 0
  },
  inputStyle: {
    backgroundColor: 'white'
  }
});

const mapStateToProps = state => {
  return {
    resources: state.resource.resources,
    languages: state.resource.languages,
    modules: state.resource.modules
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterContains: word => dispatch(filterContains(word)),
    filterByLanguage: language => dispatch(filterByLanguage(language)),
    filterByModule: module => dispatch(filterByModule(module))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSearch);
