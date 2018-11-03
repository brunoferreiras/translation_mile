import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };
  }

  renderItems(items) {
    return items.map((item, index) => (
      <Picker.Item key={index} label={item} value={item} />
    ));
  }

  render() {
    const { items } = this.props;
    return (
      <Picker
        selectedValue={this.state.selected}
        onValueChange={value => this.setState({ selected: value })}
      >
        <Picker.Item label="Todas as linguagens" value="total" />
        {this.renderItems(items)}
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#43484d'
  },
  textUpdated: {
    color: '#43484d',
    fontWeight: 'bold'
  },
  divider: {
    backgroundColor: '#8CB13E',
    marginVertical: 10
  }
});

Select.propTypes = {
  items: PropTypes.array.isRequired
};

export default Select;
