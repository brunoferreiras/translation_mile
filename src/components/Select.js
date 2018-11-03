import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Picker, StyleSheet, View } from 'react-native';
import { ALL } from '../actions/types';

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
    const { labelDefault, items, onSelected } = this.props;
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selected}
          onValueChange={value =>
            this.setState({ selected: value }, () =>
              onSelected(this.state.selected)
            )
          }
        >
          <Picker.Item label={labelDefault} value={ALL} />
          {this.renderItems(items)}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderColor: '#8CB13E',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10
  }
});

Select.propTypes = {
  items: PropTypes.array.isRequired,
  labelDefault: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired
};

export default Select;
