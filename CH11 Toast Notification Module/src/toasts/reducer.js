import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = [];

function  addToast(toasts, action){
  const toast = action.payload;
  return [...toasts, toast];
}

function deleteToast(toasts, action){
  const toastId = action.payload.id;
  const newToasts = toasts.filter(({id})=> id !== toastId);
  return newToasts;
}

export default handleActions(
  {
    [actions.addToast]: addToast,
    [actions.deleteToast]:deleteToast
  },
  initialState
);