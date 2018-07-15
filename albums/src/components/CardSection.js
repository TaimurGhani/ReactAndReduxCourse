/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

export default CardSection;

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  },
});
