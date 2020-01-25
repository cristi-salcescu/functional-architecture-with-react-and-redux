import { createAction } from 'redux-actions';

const changeLoanRequest = createAction('CHANGE_LOAN_REQUEST');
const submitLoanRequest = createAction('SUBMIT_LOAN_REQUEST');

export { changeLoanRequest, submitLoanRequest };