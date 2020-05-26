/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { View } from 'react-native'
import ItemList from './src/components/ItemList'
import InputBar from './src/components/InputBar'

const App: () => React$Node = () => {

  const [list, setList] = useState([])
  const [textValue, setTextValue] = useState('')

  const onAddButtonPress = () => {
    let newListItem = {
      key: (list.length + 1).toString(),
      title: textValue
    }

    setList([...list, newListItem])
    setTextValue('')
  }

  const onInputTextChange = text => setTextValue(text)

  return (
    <View style={{ padding: 12 }}>
      <InputBar
        textValue={textValue}
        onAddButtonPress={onAddButtonPress}
        onInputTextChange={onInputTextChange}
      />
      <ItemList list={list}/>
    </View>
  )
}

export default App
