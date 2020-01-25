import { handleActions } from 'redux-actions';
import * as actions from "./actions";
import * as fetchActions from '../fetch/actions';

const initialState = Object.freeze({
    categories : [],
    bestBooks : { categoryName: '', list: [] }
});

//updaters
function setBooks(state, action){
    const bestBooks = action.payload;
    return {
        ...state,
        bestBooks
    }
}

function setBookCategories(state, action){
    const categories = action.payload;
    return {
        ...state,
        categories
    };
}

function clearBooks(state, action){
    return {
        categories : [],
        bestBooks : { categoryName: '', list: [] }
    }
  }

export default handleActions(
    {
      [actions.setBooks]: setBooks,
      [actions.setBookCategories]: setBookCategories,
      [fetchActions.fetchStart]: clearBooks
    },
    initialState
);