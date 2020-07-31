/**
 * @format
 * @flow strict-local
 */

import React from 'react'
import Main from './src/containers/Main'
import store from './src/store'
import {Provider} from 'react-redux'

const App: () => React$Node = () => {

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}

export default App
