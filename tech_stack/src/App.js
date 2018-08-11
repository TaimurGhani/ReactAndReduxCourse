// @flow
// @format

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibrayList from './components/LibraryList';

const store = createStore(reducers);

const App = () => (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibrayList />
      </View>
    </Provider>
  );

export default App;
