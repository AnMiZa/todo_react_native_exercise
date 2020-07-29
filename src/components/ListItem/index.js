import React from 'react'
import styles from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ToDoIcon from '../../assets/images/to_do.png'
import DoneIcon from '../../assets/images/done.png'

const ListItem = ({ position, markAsDone }) => {
  const { item } = position
  const { key, title } = item

  return (
    <TouchableOpacity onPress={markAsDone(key)}>
      <View style={styles.itemWrapper}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={item.isDone ? DoneIcon : ToDoIcon}/>
        </View>
        <View style={styles.taskContainer}>
          <Text
            style={item.isDone ? styles.textDone : styles.textNotDone}
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