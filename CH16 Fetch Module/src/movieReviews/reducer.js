import { handleActions } from 'redux-actions';
import * as actions from "./actions";
import * as fetchActions from '../fetch/actions';

const initialState = [];

//updaters
function setMoviesReviews(state, action){
    return action.payload;
}

function clearMovies(state, action){
  return [];
}

export default handleActions(
    {
      [actions.setMoviesReviews]: setMoviesReviews,
      [fetchActions.fetchStart]: clearMovies
    },
    initialState
);