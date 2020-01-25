import { createAction } from 'redux-actions';

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

export { increment, decrement };