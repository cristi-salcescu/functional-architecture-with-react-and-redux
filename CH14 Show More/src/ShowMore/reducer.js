import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = false;

function toggleShowMore(showMore, action){
    return !showMore;
}

const reducer = handleActions({
    [actions.toggleShowMore]: toggleShowMore
  }, initialState);

export default reducer;