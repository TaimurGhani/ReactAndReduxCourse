/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD_32mYjr4vdSennpHIJsIeHGTT8KMYHfk',
      authDomain: 'manager-cebf6.firebaseapp.com',
      databaseURL: 'https://manager-cebf6.firebaseio.com',
      projectId: 'manager-cebf6',
      storageBucket: 'manager-cebf6.appspot.com',
      messagingSenderId: '771848911947'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}
