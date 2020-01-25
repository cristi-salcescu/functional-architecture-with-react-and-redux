import { createStore } from 'redux';

const initialState = Object.freeze({
    prevNumber: 0,
    currentNumber: 1
  });
  
function reducer(state = initialState, action){
    switch (action.type) {
      case "NEXT_FIBONACCI_NUMBER":        
        return {
          prevNumber: state.currentNumber,
          currentNumber: state.prevNumber + state.currentNumber
        };
      default:
        return state;
    }
  }
  
const store = createStore(reducer);

store.subscribe(function(){
    const {currentNumber} = store.getState();
    console.log(currentNumber);
});

store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' });
//1

store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' });
//2

store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' });
//3

store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' });
//5