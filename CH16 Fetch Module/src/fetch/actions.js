import { createAction } from 'redux-actions';

const fetchStart = createAction('FETCH_START');
const fetchSuccess = createAction('FETCH_SUCCESS');
const fetchFailure = createAction('FETCH_FAILURE');

export { fetchStart, fetchSuccess, fetchFailure };