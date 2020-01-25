import { createStore } from 'redux';

const initialState = 1;

function reducer(number = initialState, action) {
  switch (action.type) {
    case 'DOUBLE_VALUE':
      return number * 2;
    default:
      return number;
  }
}

const store = createStore(reducer);

store.subscribe(function(){
    console.log(store.getState());
});

store.dispatch({ type: 'DOUBLE_VALUE' });
//2

store.dispatch({ type: 'DOUBLE_VALUE' });
//4