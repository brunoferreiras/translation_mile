import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Picker } from 'react-native';
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
    );
  }
}

Select.propTypes = {
  items: PropTypes.array.isRequired,
  labelDefault: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired
};

export default Select;
