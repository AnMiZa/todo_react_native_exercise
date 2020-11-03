import actions from './actions';

const initialState = {
  list: [],
  textValue: '',
  modalIsVisible: false,
  modalText: '',
  currentKey: '0',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DELETE_ITEM:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
