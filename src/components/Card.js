import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card as CardElement, Divider } from 'react-native-elements';
import { formatDateUTC } from '../utils/date';

const Card = props => {
  const { resource } = props;
  return (
    <CardElement title={resource.resource_id}>
      <View>
        <Text style={styles.text}>{resource.value}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.textUpdated}>
          Atualizado em: {formatDateUTC(resource.updated_at)}
        </Text>
      </View>
    </CardElement>
  );
};

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

Card.propTypes = {
  resource: PropTypes.object.isRequired
};

export default Card;
