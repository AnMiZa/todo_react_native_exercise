import React from 'react'
import { FlatList, Text } from 'react-native'
import styles from './styles'
import ListItem from '../ListItem'

const ItemList = ({ list, onItemPress, isDone }) => {

  return list.length === 0
    ?
    <Text style={styles.emptyListText}>Dodaj zadanie</Text>
    :
    <FlatList
      data={list}
      renderItem={position => <ListItem position={position} onItemPress={onItemPress || null} isDone={isDone}/>}
    />
}

export default ItemList