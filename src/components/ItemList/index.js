import React from 'react'
import { FlatList, Text } from 'react-native'
import styles from './styles'
import ListItem from '../ListItem'
import propTypes from 'prop-types'

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

ItemList.propTypes = {
  list: propTypes.array.isRequired,
  markAsDone: propTypes.func.isRequired
}

export default ItemList