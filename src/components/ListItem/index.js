import React from 'react'
import styles from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ToDoIcon from '../../assets/images/to_do.png'
import DoneIcon from '../../assets/images/done.png'
import propTypes from 'prop-types'

const ListItem = ({ position, markAsDone, onEditItem }) => {
  const { item } = position
  const { key, title } = item

  return (
    <TouchableOpacity onPress={markAsDone(key)}>
      <View style={styles.itemWrapper}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={item.isDone ? DoneIcon : ToDoIcon}/>
        </View>
        <View style={styles.taskContainer}>
          <TouchableOpacity onPress={onEditItem(key, title)}>
            <Text
              style={item.isDone ? styles.textDone : styles.textNotDone}
              key={key}
            >
              {title}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  position: propTypes.object.isRequired,
  markAsDone: propTypes.func.isRequired,
  onEditItem: propTypes.func.isRequired
}

export default ListItem