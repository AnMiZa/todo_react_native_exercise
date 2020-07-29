import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  iconContainer: {
    width: '10%'
  },
  taskContainer: {
    width: '90%'
  },
  icon: {
    width: 20,
    height: 20
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