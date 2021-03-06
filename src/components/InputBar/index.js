import React from 'react'
import styles from './styles'
import { Button, TextInput, View } from 'react-native'
import propTypes from 'prop-types'

const InputBar = ({ textValue, onAddButtonPress, onInputTextChange }) => {

  return <View style={styles.inputBarWrapper}>
    <View style={styles.textInputWrapper}>
      <TextInput
        value={textValue}
        onChangeText={onInputTextChange}
        style={styles.textInput}
      />
    </View>
    <View style={styles.buttonWrapper}>
      <Button title={'Dodaj'} onPress={onAddButtonPress}
      />
    </View>
  </View>
}

InputBar.propTypes = {
  textValue: propTypes.string.isRequired,
  onAddButtonPress: propTypes.func.isRequired,
  onInputTextChange: propTypes.func.isRequired
}

export default InputBar