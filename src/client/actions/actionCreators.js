import actions from 'constants/actionTypes';

const incrementAction = () => ({
  type: actions.INCREMENT,
});

const decrementAction = () => ({
  type: actions.DECREMENT,
});

const dispatchIncrement = () => dispatch => dispatch(incrementAction());

const dispatchDecrement = () => dispatch => dispatch(decrementAction());

export default {
  incrementAction,
  decrementAction,
  dispatchIncrement,
  dispatchDecrement,
};
