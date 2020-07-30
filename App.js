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
import EditItemModal from './src/components/EditItemModal'

const App: () => React$Node = () => {

  const [list, setList] = useState([])
  const [textValue, setTextValue] = useState('')
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [modalText, setModalText] = useState('')

  const onAddButtonPress = () => {
    let newListItem = {
      key: (list.length + 1).toString(),
      title: textValue,
      isDone: false
    }

    setList([...list, newListItem])
    setTextValue('')
  }

  const onInputTextChange = text => setTextValue(text)

  const markAsDone = key => () => {
    let existingList = [...list]

    existingList.forEach(item => {
      if (item.key !== key) return
      item.isDone = !item.isDone
    })

    setList(existingList)
    return false
  }

  const onEditItem = (itemKey, text) => () => {
    setModalIsVisible(true)
    setModalText(text)
  }

  const onModalChangeText = text => () => {
    setModalText(text)
  }
  const onModalSave = text => () => {
    setModalText(text)
  }

  console.log(list)

  return (
    <>
      <View style={{ padding: 12 }}>
        <InputBar
          textValue={textValue}
          onAddButtonPress={onAddButtonPress}
          onInputTextChange={onInputTextChange}
        />
        <ItemList
          list={list}
          markAsDone={markAsDone}
          onEditItem={onEditItem}
        />
      </View>
      <EditItemModal
        isVisible={modalIsVisible}
        onSave={() => {}}
        onClose={() => setModalIsVisible(false)}
        modalText={modalText}
        onModalChangeText={onModalChangeText}
      />
    </>
  )
}

export default App
