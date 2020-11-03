import React from 'react';
import Main from './src/containers/Main';
import {Provider} from 'react-redux';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
