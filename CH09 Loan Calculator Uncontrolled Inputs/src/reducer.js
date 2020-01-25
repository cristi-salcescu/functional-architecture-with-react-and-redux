import { handleActions } from 'redux-actions';
import * as actions from './actions';

//state
const initialState = Object.freeze({
    amount: 10000,
    term: 5,
    interest: 5
});

//updaters
function submitLoanRequest(state, action){
    const loanRequest = action.payload;
    
    return Object.freeze({
        ...loanRequest
    });
}

export default handleActions(
    {
      [actions.submitLoanRequest]: submitLoanRequest
    },
    initialState
);