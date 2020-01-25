const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = 0;

function reducer(counter = initialState, action){
    switch(action.type){
        case INCREMENT: 
            return counter + 1;
        case DECREMENT: 
            return counter - 1;
        default:
            return counter; 
    }
}

export { INCREMENT, DECREMENT };
export default reducer;