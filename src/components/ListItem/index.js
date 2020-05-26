import React from 'react'
import styles from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ToDoIcon from '../../assets/images/to_do.png'
import DoneIcon from '../../assets/images/done.png'

const ListItem = ({ position, isDone, onItemPress }) => {
  const { item, index } = position
  const { key, title } = item

  return (
    <TouchableOpacity onPress={onItemPress(index)}>
      <View style={styles.itemWrapper}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={isDone ? DoneIcon : ToDoIcon}/>
        </View>
        <View style={styles.taskContainer}>
          <Text
            style={styles.text}
            key={key}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem