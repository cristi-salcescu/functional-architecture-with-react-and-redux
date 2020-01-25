import { createStore } from 'redux';

const initialState = Object.freeze({
    title: 'Beautiful Code',
    author: 'Douglas Crockford'
});

function reducer(book = initialState, action) {
  switch (action.type) {
    case 'CHANGE_BOOK_TITLE':
      return {
        ...book,
        title: action.title
      }
    default:
      return book
  }
}

const store = createStore(reducer);

store.subscribe(function(){
  console.log(store.getState());
});

store.dispatch({ type: 'CHANGE_BOOK_TITLE', title: 'JavaScript The Best Parts' });

store.dispatch({ type: 'CHANGE_BOOK_TITLE', title: 'How JavaScript Works' });