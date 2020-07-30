import React from 'react'
import propTypes from 'prop-types'
import { Button, Image, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import CloseIcon from '../../assets/images/icon_modal_close.png'

const EditItemModal = ({ isVisible, onSave, onClose, modalText, onModalChangeText }) => {

  return (
    <View style={isVisible ? styles.modalWrapper : { display: 'none' }}>
      <View style={styles.modalBody}>
        <TouchableOpacity onPress={onClose}>
          <Image source={CloseIcon} style={styles.closeIcon}/>
        </TouchableOpacity>
        <TextInput value={modalText} onChangeText={onModalChangeText}/>
        <Button title='Zapisz' onPress={onSave}/>
      </View>
    </View>
  )
}

EditItemModal.propTypes = {
  isVisible: propTypes.bool.isRequired,
  onSave: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  modalText: propTypes.string.isRequired,
  onModalChangeText: propTypes.func.isRequired
}

export default EditItemModal