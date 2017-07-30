import actions from '../constants/actionTypes';

const defaultState = {
  value: 1,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, value: state.value + 1 };
    case actions.DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
};

export default reducer;
