/**
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { View } from 'react-native'
import ItemList from '../../components/ItemList'
import InputBar from '../../components/InputBar'
import EditItemModal from '../../components/EditItemModal'
import { connect } from 'react-redux'
import {deleteItem} from '../../store/actions'
import {bindActionCreators} from 'redux'

const Main: () => React$Node = (props) => {
  console.log(props)

  const [list, setList] = useState([])
  const [textValue, setTextValue] = useState('')
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [currentKey, setCurrentKey] = useState(0)

  const onAddButtonPress = () => {
    if (!textValue) return

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
    setCurrentKey(itemKey)
  }

  const onModalChangeText = text => setModalText(text)

  const onModalSave = () => {
    const existingList = [...list]

    existingList.forEach(item => {
      if (item.key !== currentKey) return

      item.title = modalText
      return false
    })

    setList(existingList)
    setModalIsVisible(false)
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
          onDeleteButtonPress={props.actionDeleteItem}
        />
      </View>
      <EditItemModal
        isVisible={modalIsVisible}
        onSave={onModalSave}
        onClose={() => setModalIsVisible(false)}
        modalText={modalText}
        onModalChangeText={onModalChangeText}
      />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    textValue: state.textValue,
    modalIsVisible: state.modalIsVisible,
    modalText: state.modalText,
    currentKey: state.currentKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    actionDeleteItem: deleteItem
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
