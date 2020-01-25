import * as actions from './actions';
import uuid from 'uuid';

function addToast(message){
    return function(dispatch){
        const id = uuid();
        
        const toast = {
            id,
            message
        }

        dispatch(actions.addToast(toast));
        setTimeout(function(){
            dispatch(actions.deleteToast(toast));
        }, 5000);
    }
}

export { addToast };