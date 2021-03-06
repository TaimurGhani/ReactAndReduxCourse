/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

 class App extends Component {
   state = { loggedIn: null };

   componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbjqyXqcJLC3sWRVbQR73LgTooQwdS438',
      authDomain: 'auth-aef76.firebaseapp.com',
      databaseURL: 'https://auth-aef76.firebaseio.com',
      projectId: 'auth-aef76',
      storageBucket: 'auth-aef76.appspot.com',
      messagingSenderId: '396454763760'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
   }

   renderContent() {
     switch (this.state.loggedIn) {
       case true:
          return (
           <View style={{ height: 40 }}>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
           </View>
          );
       case false:
          return <LoginForm />;
       default:
          return (
            <View style={styles.spinnerStyle}>
              <Spinner size="large" />
            </View>
          );
     }
   }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  spinnerStyle: {
    paddingTop: 250
  }
});
