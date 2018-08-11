/* @flow weak */
// @format

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const Input = (props) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{props.label}</Text>
    <TextInput
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      autoCorrect={false}
      style={styles.inputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  </View>
);

export { Input };

const styles = StyleSheet.create({
  inputStyle: {
    color: 'black',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
