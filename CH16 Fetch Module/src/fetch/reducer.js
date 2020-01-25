import { handleActions } from 'redux-actions';
import * as actions from './actions';

const Status = Object.freeze({
  Pending: 'Pending',
  Success: 'Success',
  Failure: 'Failure'
});

const initialState = Object.freeze({
  status: null,
  error: '' 
});

//updaters
function fetchStart(state, action){
  return {
    status: Status.Pending,
    error: '' 
  }
}

function fetchFailure(state, action){
  const { message } = action.payload;
  return {
    status: Status.Failure,
    error: message 
  }
}

function fetchSuccess(state, action){
  return {
    status: Status.Success,
    error: '' 
  }
}

export default handleActions(
    {
      [actions.fetchStart]: fetchStart,
      [actions.fetchSuccess]: fetchSuccess,
      [actions.fetchFailure]: fetchFailure
    },
    initialState
  );

export { Status };