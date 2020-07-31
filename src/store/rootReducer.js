import { actions } from './actions'

const initialState = {
  list: [],
  textValue: '',
  modalIsVisible: false,
  modalText: '',
  currentKey: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DELETE_ITEM:
      const deleteListState = {...state}
      deleteListState.list.splice(action.payload.index, 1)
      console.log(deleteListState)
      return deleteListState
    default:
      return state
  }
}

export default rootReducer