/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { Button, FlatList, Text, TextInput } from 'react-native'

const App: () => React$Node = () => {

  const [list, setList] = useState([])
  const [textValue, setTextValue] = useState('')

  return (
    <>
      <TextInput
        value={textValue}
        onChangeText={text => setTextValue(text)}
      />
      <Button title={'Dodaj'} onPress={() => {
        let newListItem = {
          key: (list.length + 1).toString(),
          title: textValue
        }

        setList([...list, newListItem])
        setTextValue('')
      }}
      />
      <FlatList
        data={list}
        renderItem={position => {
          return <Text key={position.item.key}>{position.item.title}</Text>
        }}
      />
    </>
  )
}

export default App
