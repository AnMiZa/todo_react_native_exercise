import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  checkIconContainer: {
    width: '10%'
  },
  taskContainer: {
    width: '80%'
  },
  deleteIconContainer: {
    width: '10%'
  },
  checkIcon: {
    width: 20,
    height: 20
  },
  deleteIcon:{
    width: 17,
    height: 17
  },
  textNotDone: {
    fontSize: 20
  },
  textDone: {
    fontSize: 20,
    color: '#aaa',
    textDecorationLine: 'line-through'
  },
})