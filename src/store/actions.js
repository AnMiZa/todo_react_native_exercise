export const actions = {
  DELETE_ITEM: '[List] Delete item'
}

export const deleteItem = (index) => {
  return {
    type: actions.DELETE_ITEM,
    payload: {index}
  }
}