import React from 'react'
import { FlatList, Text } from 'react-native'
import styles from './styles'
import ListItem from '../ListItem'

const ItemList = ({ list, markAsDone }) => {

  return list.length === 0
    ?
    <Text style={styles.emptyListText}>Dodaj zadanie</Text>
    :
    <FlatList
      data={list}
      renderItem={position => <ListItem position={position} markAsDone={markAsDone}/>}
    />
}

export default ItemList