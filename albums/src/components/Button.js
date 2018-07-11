/* @flow weak */

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Button = (props) => (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <Text style={styles.text}>
      Click Me!!!
    </Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});
