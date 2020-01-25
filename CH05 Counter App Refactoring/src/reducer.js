import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = 0;

//updaters
function increment(counter){
    return counter + 1;
}

function decrement(counter){
    return counter - 1;
}

export default handleActions({
    [actions.increment]: increment,
    [actions.decrement]: decrement
  },
  initialState
);