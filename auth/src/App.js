/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent component</Text>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
