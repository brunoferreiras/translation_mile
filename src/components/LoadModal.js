import React from 'react';
import { ActivityIndicator, Dimensions, Modal, Text, View } from 'react-native';
const { width: DEVICE_HEIGHT } = Dimensions.get('window');

const LoadModal = props => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={_ => console.log('close')}
        visible={props.show}
      >
        <View style={styles.loaderOuterView}>
          <View style={styles.loaderView}>
            <ActivityIndicator size={'large'} color={styles.background} />
            <Text style={styles.textLoader}>{props.legend}</Text>
          </View>
        </View>
      </Modal>
      {props.children}
    </View>
  );
};

const styles = {
  loaderView: {
    width: DEVICE_HEIGHT / 7,
    height: DEVICE_HEIGHT / 7,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8
  },
  loaderOuterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLoader: {
    fontSize: 10,
    marginTop: 3,
    color: '#F9F7F2',
    textAlign: 'center'
  },
  background: {
    color: '#F9F7F2'
  }
};

export default LoadModal;
