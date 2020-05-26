import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './styles'

const ItemList = ({ list }) => {

  return <FlatList
    data={list}
    renderItem={position => {
      return <View style={styles.itemWrapper}>
        <Text style={styles.text} key={position.item.key}>{position.item.title}</Text>
      </View>
    }}
  />
}

export default ItemList