import { combineReducers } from 'redux';
import booksReducer from './books/reducer';
import articlesReducer from './articles/reducer';
import movieReviewsReducer from './movieReviews/reducer';
import fetchReducer from './fetch/reducer';

export default combineReducers({
    books: booksReducer,
    articles: articlesReducer,
    movieReviews: movieReviewsReducer,
    fetch: fetchReducer
})