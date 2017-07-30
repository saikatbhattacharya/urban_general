import actions from '../constants/actionTypes';

const incrementAction = () => ({
  type: actions.INCREMENT,
});

const decrementAction = () => ({
  type: actions.DECREMENT,
});

export default {
  incrementAction,
  decrementAction,
};
