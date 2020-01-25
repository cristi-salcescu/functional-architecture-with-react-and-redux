import { Status } from './reducer';

function isLoading(state){
    return state.fetch.status === Status.Pending;
}

export { isLoading };