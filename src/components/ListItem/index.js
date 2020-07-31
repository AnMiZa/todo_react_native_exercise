import React from 'react'
import styles from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ToDoIcon from '../../assets/images/to_do.png'
import DoneIcon from '../../assets/images/done.png'
import DeleteIcon from '../../assets/images/icon_modal_close.png'
import propTypes from 'prop-types'

const ListItem = ({ position, markAsDone, onEditItem, onDeleteButtonPress}) => {
  const { item, index } = position
  const { key, title } = item

  return (
    <TouchableOpacity onPress={markAsDone(key)}>
      <View style={styles.itemWrapper}>
        <View style={styles.checkIconContainer}>
          <Image style={styles.checkIcon} source={item.isDone ? DoneIcon : ToDoIcon}/>
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
        <View style={styles.deleteIconContainer}>
          <TouchableOpacity onPress={onDeleteButtonPress(index)}>
            <Image source={DeleteIcon} style={styles.deleteIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  position: propTypes.object.isRequired,
  markAsDone: propTypes.func.isRequired,
  onEditItem: propTypes.func.isRequired,
  onDeleteButtonPress: propTypes.func.isRequired
}

export default ListItem