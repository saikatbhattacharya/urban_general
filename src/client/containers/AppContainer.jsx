import { connect } from 'react-redux';
import App from '../components/App';
import actions from '../actions/actionCreators';

const mapStateToProps = state => ({
  value: state.actionReducer.value,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(actions.incrementAction());
  },
  decrement: () => {
    dispatch(actions.decrementAction());
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
