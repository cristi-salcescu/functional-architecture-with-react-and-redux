import { handleActions } from 'redux-actions';
import * as actions from "./actions";
import * as fetchActions from '../fetch/actions';

const initialState = [];

//updaters
function setArticles(state, action){
    const articles = action.payload;
    return articles;
}

function clearArticles(state, action){
  return [];
}

export default handleActions(
    {
      [actions.setArticles]: setArticles,
      [fetchActions.fetchStart]: clearArticles
    },
    initialState
);