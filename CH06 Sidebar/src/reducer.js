import { handleActions } from 'redux-actions';
import * as actions from './actions';

//state
const initialState = false;

//updaters
function toggleSidebar(show, action){
    return !show;
}

export default handleActions({
      [actions.toggleSidebar]: toggleSidebar
    },
    initialState
);